// Import dependencies
import express from 'express';

// Import external routers
import userRouter from './userRoutes.js';

// Create the main router and register routers
const mainRouter = express.Router();

mainRouter.use('/users', userRouter);

// Export the main router
export default mainRouter;