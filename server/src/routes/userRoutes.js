// --------------------------------------IMPORT---------------------------------------
// Import dependencies
import express from 'express';

// Import controllers
import userController from '../controllers/userController.js';

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

export default userRouter;