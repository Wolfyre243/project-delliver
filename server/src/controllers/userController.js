// Import
import userModel from '../models/userModel.js'

const controller = {}

controller.retrieveAllUsers = async (req, res, next) => {
  return userModel.retrieveAll().then((result) => {
    return res.status(200).json(result)
  })
}

controller.retrieveUserByUserId = async (req, res, next) => {
  return userModel
    .retrieveByUserID(res.locals.user.user_id)
    .then((result) => {
      return res.status(200).json(result)
    })
    .catch((error) => {
      if (error.status)
        return res.status(error.status).json({ message: error.message })
      return res.status(500).json({ message: error.message })
    })
}

export default controller
