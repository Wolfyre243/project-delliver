// --------------------------------------IMPORT---------------------------------------
// Import dependencies
import express from 'express';

// Import controllers
import authController from '../controllers/authController.js';
import userController from '../controllers/userController.js';
import sessionController from '../controllers/sessionController.js';
import jwtMiddleware from '../middleware/jwtMiddleware.js';
// -----------------------------------SET UP ROUTES-----------------------------------
// Create the router
const authRouter = express.Router();

/**
 * POST
 * Registers a new user
 */
authRouter.post('/register',
    authController.register,
    // mailMiddleware.sendMail,
    sessionController.createSession,
    jwtMiddleware.generateRefreshToken,
    jwtMiddleware.generateAccessToken,
    jwtMiddleware.setTokens
);

/**
 * POST
 * Logs the user in
 */
authRouter.post('/login',
    authController.login,
    sessionController.createSession,
    jwtMiddleware.generateRefreshToken,
    jwtMiddleware.generateAccessToken,
    jwtMiddleware.setTokens
);

/**
 * POST
 * Logs the current user out
 */
authRouter.post('/logout',
    jwtMiddleware.verifyRefreshToken,
    authController.logout
);

/**
 * POST
 * Refreshes access token
 * (POST because access token is created)
 */
authRouter.post('/refresh',
    jwtMiddleware.verifyRefreshToken,
    jwtMiddleware.checkAccessToken,
    jwtMiddleware.generateAccessToken,
    async (req, res) => {
        return res.status(200).json({ accessToken: res.locals.access_token });
    }
);

/**
 * PUT
 * Reads token from URL param and updates user's verification status if valid.
 * 
 * Query: token
 */
// authRouter.put('/verify-email',
//     authController.verifyEmail
// );

/**
 * POST
 * Takes in user's username to reset their password via email
 * 
 * Body: username
 */
// authRouter.post('/forgot-password',
//     [ usernameValidation() ], validate,
//     authController.forgotPassword,
//     mailMiddleware.sendMail
// );

/**
 * POST
 * Resets the user's password
 * 
 * Body: password, confirmPassword
 */
// authRouter.post('/reset-password',
//     [ passwordValidation() ], validate,
//     authController.resetPassword
// );

export default authRouter;