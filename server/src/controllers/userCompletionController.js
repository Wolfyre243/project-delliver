let model = require("../models/userCompletionModel");
let userModel = require("../models/userModel");
let challengesModel = require("../models/challengesModel");
let rewardsModel = require("../models/rewardsModel");
const e = require("express");
module.exports.getCompletedChallenges = (req, res, next) => {
  let callback = (error, results) => {
    if (error) {
      console.error("Error: getCompletedChallenges", error);
      res.status(500).json(error);
    } else {
      if (results.length == 0) {
        res.status(404).json({ message: "Not found" });
      } else {
        res.status(200).json(results);
      }
    }
  };
  let datas = {
    challenge_id: req.params.challenge_id,
  };
  model.selectChallenges(datas, callback);
};

module.exports.checkForUser = (req, res, next) => {
  // if the creation date is not found in user return 400 status and stop the code
  if (req.body.creation_date == undefined) {
    res.status(400).json({ message: "Bad request" });
    return;
  } else {
    // check for user if user is not found return status 404
    let callbackForSelectUserById = (error, results) => {
      if (error) {
        console.error("Error: selectUserById", error);
        res.status(500).json(error);
      } else if (results.length == 0) {
        res.status(404).json({ message: "User not found" });
      } else {
        res.locals.userObject = results
        next()
      }
    }
    let data = {
      userId: res.locals.userId
    }
    userModel.selectUserById(data, callbackForSelectUserById);
  }
};

module.exports.checkforChallenges = (req, res, next) => {
  // check the challenges, if challenges is not found, return status 404
  let callbackForSelectChallengesFromId = (error, results) => {
    if (error) {
      console.error("Error: selectChallengesFromId", error);
      res.status(500).json(error);
    } else if (results.length == 0) {
      res.status(404).json({ message: "Challenge not found" });
    } else {
      res.locals.challengeObject = results
      next();
    }
  }
  let data = {
    id: req.params.challenge_id
  }
  challengesModel.selectChallengesFromId(
    data,
    callbackForSelectChallengesFromId
  );
}

module.exports.updateLevel = (req, res, next) => {
  function setSkillPoints(skillpointToUpdate) {
    let data = {
      ...res.locals.userObject[0]
    }
    res.locals.dataForUpdate = {
      username: data.username,
      skillpoints: data.skillpoints + skillpointToUpdate,
      skillpoints_earned: data.skillpoints_earned + skillpointToUpdate,
      level: 0,
      user_id: data.user_id
    };
  }
  // set the amount of skillpoint, depending on the completion of the challenge
  if (req.body.completed == true) {
    setSkillPoints(parseInt(res.locals.challengeObject[0].skillpoints));
  } else if (req.body.completed == false) {
    // If person didn't complete challenge, give 5 skillpoint to the user
    setSkillPoints(5)
  }
  let skillpoint_Earned = res.locals.dataForUpdate.skillpoints_earned;
  let callback = (error, results) => {
    if (error) {
      console.error("Error: insertRewards", error);
      res.status(500).json(error);
    } else {
      next();
    }
  };
  function checkForRewards(reward) {
    rewardsModel.selectRewardsByUserId(
      { userId: res.locals.dataForUpdate.user_id },
      (error, results) => {
        if (error) {
          console.error("Error: selectRewardsByUserId", error);
          res.status(500).json(error);
        } else {
          // used debounce to check whether user owns that reward
          let found = false;
          results.forEach((value) => {
            if (value.item === reward) {
              found = true;
            }
          })
          // if user doesn't own that reward, insert that reward or else and update the completed challenges table
          if (found === false) {
            rewardsModel.insertRewards({ userId: res.locals.dataForUpdate.user_id, item: reward }, callback)
          } else if (found === true) {
            next();
          }
        }
      }
    );
  }
  // Check whether the skillpoint earned matches the amount necessary to level up, if it matches check whether they own that reward
  if (skillpoint_Earned >= 1000 && skillpoint_Earned < 2000) {
    res.locals.dataForUpdate.level = 1
    checkForRewards("NTUC $5 voucher");
  } else if (skillpoint_Earned >= 2000 && skillpoint_Earned < 3000) {
    res.locals.dataForUpdate.level = 2
    checkForRewards("Free mcdonald's ice cream");
  } else if (skillpoint_Earned >= 3000 && skillpoint_Earned < 4000) {
    res.locals.dataForUpdate.level = 3
    checkForRewards("NTUC $10 voucher");
  } else if (skillpoint_Earned >= 4000) {
    res.locals.dataForUpdate.level = 4
    checkForRewards("Free vacation to Bali");
  } else {
    next();
  }
}

module.exports.postCompletedChallenges = (req, res, next) => {
  let datas = {
    challenge_id: req.params.challenge_id,
    user_id: res.locals.userId,
    completed: req.body.completed,
    creation_date: req.body.creation_date,
    notes: req.body.notes,
  };

  let callback = (error, results) => {
    if (error) {
      console.error("Error: postCompletedChallenges", error);
      res.status(500).json(error);
    } else {
      // a function to catch server error
      function errorFunc(errorMsg) {
        res.status(500).json(errorMsg);
      }
      // change the skillpoints of the user
      function changeUserSkillpoints() {
        return new Promise((resolve, reject) => {
          let datasToUse = res.locals.dataForUpdate
          userModel.updateUserById(datasToUse, (error, results) => {
            if (error) {
              reject({ message: `Error: updateUserById ${error}` });
            } else {
              resolve();
            }
          });
        });
      }
      // display the challenge from the result insertId
      function output(datas) {
        return new Promise((resolve, reject) => {
          model.selectChallengesByChallengeId(
            { id: datas.insertId },
            (error, results) => {
              if (error) {
                reject({
                  message: `Error: selectChallengesByChallengeId ${error}`,
                });
              } else {
                if (!res.headersSent) {
                  res.status(201).json(results[0]);
                }
              }
            }
          );
        });
      }
      changeUserSkillpoints()
        .then(output(results))
        .catch(errorFunc)
    }
  };
  if (!res.headersSent) {
    model.insertCompletedChallenges(datas, callback);
  }
}
module.exports.getCompletedChallengedByUserId = (req, res, next) => {
  let data = {
    user_id: res.locals.userId
  }
  let callback = (error, results) => {
    if (error) {
      console.error("Error: selectCompletionChallengesByUserId", error);
      res.status(500).json(error);
    } else {
      if (results.length === 0) {
        res.status(404).json({ message: "Completion challenges not found" });
      } else {
        res.status(200).json(results);
      }
    }
  }
  model.selectCompletionChallengesByUserId(data, callback)
}
module.exports.errorHandlingForChallengeCompletion = (req, res, next) => {
  let completion_id = req.params.completion_id
  let data = {
    id: completion_id
  }
  let callback = (error, results) => {
    if (error) {
      console.error("Error: selectUserById", error);
      res.status(500).json(error);
    } else {
      if (results.length === 0) {
        res.status(404).json({ message: "Challenges completion id not found" })
      } else {
        if (res.locals.userId != results[0].user_id) {
          res.status(409).json({ message: "User ID is not the same" })
        } else {
          next();
        }
      }
    }
  }
  model.selectChallengesByChallengeId(data, callback)
}
module.exports.updateNotesForCompletion = (req, res, next) => {
  if (req.body.notes === undefined) {
    res.status(400).json({ message: "Notes is undefined" })
  } else {
    let data = {
      notes: req.body.notes,
      completion_id: req.params.completion_id
    }
    let callback = (error, results) => {
      if (error) {
        console.error("Error: updateUserCompletion", error);
        res.status(500).json(error);
      } else {
        let callback = (error, results) => {
          if (error) {
            console.error("Error: selectChallengesByChallengeId", error);
            res.status(500).json(error);
          } else {
            res.status(200).json(results[0])
          }
        }
        model.selectChallengesByChallengeId({ id: data.completion_id }, callback)
      }
    }
    model.updateUserCompletion(data, callback)
  }
}
module.exports.deleteReview = (req, res, next) => {
  req.body.notes = "";
  let data = {
    completion_id: req.params.completion_id
  }
  let callback = (error, results) => {
    if (error) {
      console.error("Error: deleteReview", error);
      res.status(500).json(error);
    } else {
      next();
    }
  }
  model.deleteReview(data,callback)
}