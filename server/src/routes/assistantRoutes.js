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

export default assistantRouter
