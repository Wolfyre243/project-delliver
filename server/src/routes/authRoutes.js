// --------------------------------------IMPORT---------------------------------------
// Import dependencies
import express from "express";

// Import controllers
import authController from "../controllers/authController.js";
import sessionController from "../controllers/sessionController.js";
import jwtMiddleware from "../middleware/jwtMiddleware.js";
// -----------------------------------SET UP ROUTES-----------------------------------
// Create the router
const authRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication endpoints
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *               - confirmPassword
 *               - fname
 *               - lname
 *             properties:
 *               username:
 *                 type: string
 *                 example: johndoe
 *               email:
 *                 type: string
 *                 example: johndoe@example.com
 *               password:
 *                 type: string
 *                 example: secret123
 *               confirmPassword:
 *                 type: string
 *                 example: secret123
 *               fname:
 *                 type: string
 *                 example: John
 *               lname:
 *                 type: string
 *                 example: Doe
 *               is_highrisk:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       200:
 *         description: User successfully registered
 *       409:
 *         description: Password mismatch or username/email taken
 */
authRouter.post(
    "/register",
    authController.register,
    // mailMiddleware.sendMail,
    sessionController.createSession,
    jwtMiddleware.generateRefreshToken,
    jwtMiddleware.generateAccessToken,
    jwtMiddleware.setTokens
);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login as a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: johndoe
 *               password:
 *                 type: string
 *                 example: secret123
 *     responses:
 *       200:
 *         description: User successfully logged in
 *       401:
 *         description: Invalid credentials
 */
authRouter.post(
    "/login",
    authController.login,
    sessionController.createSession,
    jwtMiddleware.generateRefreshToken,
    jwtMiddleware.generateAccessToken,
    jwtMiddleware.setTokens
);

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Logout from session
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: User successfully logged out
 *       403:
 *         description: Missing required refresh token, or refresh token/session is invalid
 */
authRouter.post(
    "/logout",
    jwtMiddleware.verifyRefreshToken,
    authController.logout
);

/**
 * @swagger
 * /auth/refresh:
 *   post:
 *     summary: Refreshes access token
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Access token successfully refreshed
 *       403:
 *         description: Missing required refresh token, or refresh token/session is invalid
 *       404:
 *         description: Session not found
 */
authRouter.post(
    "/refresh",
    jwtMiddleware.verifyRefreshToken,
    jwtMiddleware.checkAccessToken,
    jwtMiddleware.generateAccessToken,
    async (req, res) => {
        return res.status(200).json({ accessToken: res.locals.access_token });
    }
);

export default authRouter;
