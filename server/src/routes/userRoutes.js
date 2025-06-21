// --------------------------------------IMPORT---------------------------------------
// Import dependencies
import express from 'express'

// Import controllers
import userController from '../controllers/userController.js'
import jwtMiddleware from '../middleware/jwtMiddleware.js'
// -----------------------------------SET UP ROUTES-----------------------------------
// Create the router
const userRouter = express.Router()

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User endpoints
 */


/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve all users
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Users successfully retrieved
 */
userRouter.get('/', userController.retrieveAllUsers)

/**
 * @swagger
 * /users/details:
 *   get:
 *     summary: Retrieve details about current logged in user
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Users successfully retrieved
 *       404:
 *         description: User not found
 */
userRouter.get('/details', jwtMiddleware.verifyToken,userController.retrieveUserByUserId)

export default userRouter
