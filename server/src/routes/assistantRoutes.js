// --------------------------------------IMPORT---------------------------------------
// Import dependencies
import express from 'express'

// Import controllers
import assistantController from '../controllers/assistantController.js'
import jwtMiddleware from '../middleware/jwtMiddleware.js'
// -----------------------------------SET UP ROUTES-----------------------------------
// Create the router
const assistantRouter = express.Router()

/**
 * @swagger
 * tags:
 *   name: Assistant
 *   description: AI Assistant endpoints
 */

assistantRouter.use(jwtMiddleware.verifyToken)

/**
 * @swagger
 * /assistant:
 *   post:
 *     summary: Generates an AI response to the user's message
 *     tags: [Assistant]
 *     responses:
 *       200:
 *         description: Response generated successfully
 */
assistantRouter.post('/', assistantController.generateResponse)

/**
 * @swagger
 * /assistant/conversations:
 *   get:
 *     summary: Gets all user conversations
 *     tags: [Assistant]
 *     responses:
 *       200:
 *         description: Successfully retrieved conversations
 */
assistantRouter.get(
  '/conversations',
  assistantController.retrieveAllConversations
)

/**
 * @swagger
 * /assistant/conversations/:conversation_id:
 *   get:
 *     summary: Gets all messages in a conversation
 *     tags: [Assistant]
 *     parameters:
 *      - in: params
 *        name: conversation_id
 *        schema:
 *         type: int
 *         required: true
 *         example: 243
 *         description: The ID of a conversation to get messages from
 *     responses:
 *       200:
 *         description: Successfully retrieved conversation messages
 */
assistantRouter.get(
  '/conversations/:conversation_id',
  assistantController.retrieveAllConversationMessages
)

assistantRouter.post('/conversations', assistantController.startConversation)

assistantRouter.post(
  '/message/:conversation_id',
  assistantController.generateReply
)

export default assistantRouter
