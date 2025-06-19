// --------------------------------------IMPORT---------------------------------------
// Import dependencies
import express from 'express';

// Import controllers
import userController from '../controllers/userController.js';
import controller from "../middleware/jwtMiddleware.js";
// -----------------------------------SET UP ROUTES-----------------------------------
// Create the router
const userRouter = express.Router();

/**
 * GET
 * Displays all users
 */
userRouter.get('/',
    userController.retrieveAllUsers
);
/**
 * GET
 * Displays user details according to the access token
 */
userRouter.get("/getUserDetails",
    controller.verifyToken,
    userController.retrievUserByUserId
)
export default userRouter;