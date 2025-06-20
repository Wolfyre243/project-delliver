const express = require("express");
const router = express.Router();
let controller = require("../controllers/challengesController");
let jwtMiddleware = require("../middlewares/jwtMiddleware")
router.post("/",jwtMiddleware.verifyToken, controller.createChallenges);
router.post("/timer", jwtMiddleware.verifyToken, controller.postChallengeTimer)
router.post("/rating", jwtMiddleware.verifyToken, controller.postRating)
router.get("/",controller.getChallenges);
router.get("/:challenge_id/rating", jwtMiddleware.verifyToken, controller.getChallengeReviews)
router.get("/search/:search_query",controller.searchChallenges)
router.get("/userChallenges",jwtMiddleware.verifyToken, controller.getChallengesForLoggedInUsers)
router.get("/:challenge_id",controller.getChallengesByChallengeId)
router.put("/:challenge_id",controller.updateChallenges);
router.delete("/:challenge_id",controller.deleteChallenges);
router.delete("/timer/:challenge_id",jwtMiddleware.verifyToken,controller.deleteFitnessChallengeTimer)
module.exports = router;