// --------------------------------------IMPORT---------------------------------------
// Import dependencies
import express from 'express'

// Import controllers
import userController from '../controllers/userController.js'
import jwtMiddleware from '../middleware/jwtMiddleware.js'
// -----------------------------------SET UP ROUTES-----------------------------------
// Create the router
const userRouter = express.Router()

userRouter.use(jwtMiddleware.verifyToken)

/**
 * GET
 * Displays user details according to the access token
 */
userRouter.get('/details', userController.retrieveUserByUserId)
export default userRouter
