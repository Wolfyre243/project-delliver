const express = require("express");
const router = express.Router();
const controller = require("../controllers/userCompletionController");
let jwtMiddleware = require("../middlewares/jwtMiddleware");
router.get("/user/challengesCompletion", jwtMiddleware.verifyToken, controller.getCompletedChallengedByUserId)
router.get("/:challenge_id/completion",controller.getCompletedChallenges);
router.put("/completion/:completion_id", jwtMiddleware.verifyToken,controller.errorHandlingForChallengeCompletion, controller.updateNotesForCompletion)
router.post("/:challenge_id",jwtMiddleware.verifyToken,controller.checkForUser,controller.checkforChallenges,controller.updateLevel,controller.postCompletedChallenges);
router.delete("/completion/:completion_id",jwtMiddleware.verifyToken, controller.errorHandlingForChallengeCompletion, controller.deleteReview, controller.updateNotesForCompletion)
module.exports = router;