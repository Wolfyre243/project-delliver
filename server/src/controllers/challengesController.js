let model = require("../models/challengesModel");
let userCompletionModel = require("../models/userCompletionModel");

module.exports.createChallenges = (req, res, next) => {
    // Check for request body first before continuing
    if (req.body.challenge == undefined || req.body.skillpoints == undefined) {
        if (!res.headersSent) {
            res.status(400).json({ message: "User_id and/or challenge and/or skillpoints is undefined" })
        }
    } else {
        let datas = {
            creator_id: res.locals.userId,
            challenge: req.body.challenge,
            skillpoints: req.body.skillpoints,
            timer: req.body.timer
        }
        let callback = (error, results) => {
            if (error) {
                console.error("Error: createNewChallenges", error);
                res.status(500).json(error);
            } else {
                model.selectChallengesFromId({ id: results.insertId }, (error, results) => {
                    if (error) {
                        console.error("Error: selectChallengesFromId", error);
                        res.status(500).json(error);
                    } else {
                        res.status(201).json(results[0]);
                    }
                })
            }
        }
        model.insertChallenges(datas, callback);
    }

};

module.exports.getChallenges = (req, res, next) => {
    let callback = (error, results) => {
        if (error) {
            console.error("Error: getChallenges", error);
            res.status(500).json(error);
        } else {
            res.status(200).json(results);
        }
    }
    model.selectAllChallenges(callback);
}

module.exports.updateChallenges = (req, res, next) => {
    function updateChallengesAfterErrors() {
        let datas = {
            user_id: req.body.user_id,
            challenge: req.body.challenge,
            skillpoints: req.body.skillpoints,
            challenge_id: req.params.challenge_id
        };
        let callback = (error, results) => {
            if (error) {
                console.error("Error: updateChallenges", error);
                res.status(500).json(error);
            } else {
                model.selectChallengesFromId({ id: datas.challenge_id }, (error, results) => {
                    if (error) {
                        console.error("Error: selectChallengesFromId", error);
                        res.status(500).json(error);
                    } else {
                        res.status(200).json(results[0]);
                    }
                })
            }
        }
        model.updateChallenges(datas, callback);
    }
    // Check the request body first 
    if (req.body.challenge == undefined || req.body.skillpoints == undefined || req.body.user_id == undefined) {
        res.status(400).json({ message: "Bad request" });
    } else {
        // Check whether the challenge id is found in the database
        model.selectChallengesFromId({ id: req.params.challenge_id }, (error, results) => {
            if (error) {
                console.error("Error: updateChallenges", error);
                res.status(500).json(error);
            } else {
                if (results.length == 0) {
                    // send 404 status as it is not found
                    res.status(404).json({ message: "Not found" });
                } else {
                    // Check whether the creator of the challenge is equal to the user who requested the challenge
                    if (results[0].creator_id != req.body.user_id) {
                        res.status(403).json({ message: "Forbidden due to not correct creator" })
                    } else {
                        // update the challennge as there are no error
                        updateChallengesAfterErrors();
                    }
                }
            }
        })
    }
}

module.exports.deleteChallenges = (req, res, next) => {
    function deletes() {
        let callback = (error, results) => {
            if (error) {
                console.error("Error: deleteChallenges", error);
                res.status(500).json(error);
            } else {
                if (results.affectedRows == 0) {
                    res.status(404).json({ message: "Not found" });
                } else {
                    res.status(204).send();
                }
            }
        };
        model.deleteChallenges(dataNeeded, callback);
    }
    let dataNeeded = {
        challenge_id: req.params.challenge_id
    }
    userCompletionModel.selectChallenges(dataNeeded, (error, results) => {
        if (error) {
            console.error("Error: selectChallengesFromId", error);
            res.status(500).json(error);
        } else {
            if (results.length > 0) {
                // delete user completion with that challenge id
                userCompletionModel.deleteUserCompletion(dataNeeded, (error, results) => {
                    if (error) {
                        console.error("Error: deleteUserCompletion", error);
                        res.status(500).json(error);
                    } else {
                        // delete the requested challenge
                        deletes();
                    }
                })
            } else {
                deletes();
            }
        }
    })
}

module.exports.searchChallenges = (req, res, next) => {
    let callback = (error, results) => {
        if (error) {
            console.error("Error: searchChallenges", error);
            res.status(500).json(error);
        } else {
            if (results.length === 0) {
                res.status(404).json({ message: "Challenge is not found" })
            } else {
                res.status(200).json(results);
            }
        }
    }

    let challengePassed = "%" + req.params.search_query + "%"
    let data = {
        challenge: challengePassed
    }
    model.searchChallenges(data, callback)

}

module.exports.getChallengesForLoggedInUsers = (req, res, next) => {
    let callback = (error, results) => {
        if (error) {
            console.error("Error: getChallengesForLoggedInUsers", error);
            res.status(500).json(error);
        } else {
            if (results.length === 0) {
                res.status(404).json({ message: "Challenge is not found" })
            } else {
                res.status(200).json(results);
            }
        }
    }
    let data = {
        user_id: res.locals.userId
    }
    model.selectAllChallengesForLoggedIn(data, callback);
}
module.exports.getChallengesByChallengeId = (req, res, next) => {
    let data = {
        id: req.params.challenge_id 
    }
    let callback = (error, results) => {
        if (error) {
            console.error("Error: getChallengesByChallengeId", error);
            res.status(500).json(error);
        } else {
            if (results.length === 0) {
                res.status(404).json({ message: "Challenge is not found" })
            } else {
                res.status(200).json(results);
            }
        }
    }
    model.selectChallengesFromId(data, callback);
}
module.exports.deleteFitnessChallengeTimer = (req, res, next) => {
    let data = {
        challenge_id: req.params.challenge_id,
        user_id: res.locals.userId
    }
    let callback = (error, results) => {
        if (error) {
            console.error("Error: deleteChallengeTimer", error);
            res.status(500).json(error);
        } else {
            if (results.affectedRows === 0) {
                res.status(404).json({ message: "Challenge not found with timer" });
            } else {
                res.status(204).send();
            }
        }
    }
    model.deleteChallengeTimer(data, callback)
}
module.exports.postChallengeTimer = (req, res, next) => {
    if (req.body.timeEnded == undefined || req.body.challenge_id == undefined) {
        if (!res.headersSent) {
            res.status(400).json({ message: "timeEnded and/or challenge_id is undefined" })
        }
    } else {
        let data = {
            challenge_id: req.body.challenge_id,
            timeEnded: req.body.timeEnded,
            user_id: res.locals.userId
        }
        let callbackForShowingData = (error, results) => {
            if (error) {
                console.error("Error: selectChallengesFromId", error);
                res.status(500).json(error);
            } else {
                res.status(201).json(results);
            }
        }
        let callback = (error, results) => {
            if (error) {
                console.error("Error: postChallengeTimer", error);
                res.status(500).json(error);
            } else {
                if (results.affectedRows == 0) {
                    res.status(404).json({ message: "Challenge and/or user_id not found" });
                } else {
                    model.selectChallengesFromId({ id: data.challenge_id }, callbackForShowingData)
                }
            }
        }
        model.postChallengeTimer(data, callback);
    }
}
module.exports.postRating = (req, res, next) => {
    if (req.body.challenge_id === undefined || req.body.rating === undefined || req.body.complete_id == undefined) {
        res.status(400).json({ message: "Rating or challenge_id is undefined" })
    } else {
        let data = {
            challenge_id: req.body.challenge_id,
            rating: req.body.rating,
            complete_id: req.body.complete_id
        }
        let callback = (error, results) => {
            if (error) {
                console.error("Error: updateChallenges", error);
                res.status(500).json(error);
            } else {
                if (results.affectedRows === 0) {
                    res.status(404).json({ message: "Challenge id and/or user id not found" });
                } else {
                    res.status(204).send();
                }
            }
        }
        model.postChallengeRating(data, callback)
    }
}
module.exports.getChallengeReviews = (req, res, next) => {
    let data = {
        challenge_id: req.params.challenge_id
    }
    let callback = (error, results) => {
        if (error) {
            console.error("Error: selectRatingByChallengeId", error);
            res.status(500).json(error);
        } else {
            if (results.length === 0){
                res.status(404).json({message: "Challenge not found"})
            } else {
                res.status(200).json(results);
            }
        }
    }
    model.selectRatingByChallengeId(data,callback);
}