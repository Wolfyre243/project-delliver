// --------------------------------------IMPORT---------------------------------------
// Import dependencies
import express from 'express'

// Import controllers
import missionController from '../controllers/missionController.js'
import jwtMiddleware from '../middleware/jwtMiddleware.js'

// -----------------------------------SET UP ROUTES-----------------------------------
// Create the router
const missionRouter = express.Router()

missionRouter.use(jwtMiddleware.verifyToken)

missionRouter.get('/', missionController.retrieveAllMissions)

export default missionRouter
