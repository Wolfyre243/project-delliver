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

// router.post("/",jwtMiddleware.verifyToken, controller.createChallenges);
// router.post("/timer", jwtMiddleware.verifyToken, controller.postChallengeTimer)
// router.post("/rating", jwtMiddleware.verifyToken, controller.postRating)
// router.get("/",controller.getChallenges);
// router.get("/:challenge_id/rating", jwtMiddleware.verifyToken, controller.getChallengeReviews)
// router.get("/search/:search_query",controller.searchChallenges)
// router.get("/userChallenges",jwtMiddleware.verifyToken, controller.getChallengesForLoggedInUsers)
// router.get("/:challenge_id",controller.getChallengesByChallengeId)
// router.put("/:challenge_id",controller.updateChallenges);
// router.delete("/:challenge_id",controller.deleteChallenges);
// router.delete("/timer/:challenge_id",jwtMiddleware.verifyToken,controller.deleteFitnessChallengeTimer)

export default missionRouter
