// Import models
import sessionModel from '../models/sessionModel.js';

const controller = {};

controller.createSession = async function (req, res, next) {
    const user_id = res.locals.user_id
    if (!user_id) {
        return res.status(400).json({ message: "Missing user_id" });
    }

    return sessionModel.insertSingle(user_id)
        .then((session) => {
            console.log(session);
            res.locals.session_id = session.session_id;
            return next();
        })
        .catch((error) => {
            console.error("Error creating session:", error);
            return res.status(500).json({ message: "Internal server error" });
        });
}

export default controller;