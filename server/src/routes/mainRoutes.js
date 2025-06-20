// Import dependencies
import express from 'express'

// Import external routers
import userRouter from './userRoutes.js'
import authRouter from './authRoutes.js'
import missionRouter from './missionRoutes.js'

// Create the main router and register routers
const mainRouter = express.Router()

mainRouter.use('/users', userRouter)
mainRouter.use('/auth', authRouter)
mainRouter.use('/mission', missionRouter)

// Export the main router
export default mainRouter
