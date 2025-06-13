// Import
import userModel from '../models/userModel.js';

const controller = {};

controller.retrieveAllUsers = async (req, res, next) => {
    return userModel
        .retrieveAll()
        .then((result) => {
            return res.status(200).json(result);
        })
        .catch((error) => {
            return res.status(500).json({ message: error.message });
        });
}

export default controller;