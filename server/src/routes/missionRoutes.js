// --------------------------------------IMPORT---------------------------------------
// Import dependencies
import express from 'express'

// Import controllers
import missionController from '../controllers/missionController.js'
import jwtMiddleware from '../middleware/jwtMiddleware.js'

// -----------------------------------SET UP ROUTES-----------------------------------
// Create the router
const missionRouter = express.Router()

/**
 * @swagger
 * tags:
 *   name: Mission
 *   description: Mission endpoints
 */

missionRouter.use(jwtMiddleware.verifyToken)

/**
 * @swagger
 * /mission:
 *   get:
 *     summary: Retrieve all publicly available missions to attempt
 *     tags: [Mission]
 *     parameters:
 *      - in: query
 *        name: search
 *        schema:
 *         type: string
 *         required: false
 *         example: run
 *         description: Search for a specific mission
 *      - in: query
 *        name: category
 *        schema:
 *          type: array
 *          enum: [fitness, nutrition, sleep]
 *          required: false
 *          description: Filter by one or more categories
 *      - in: query
 *        name: creator
 *        schema:
 *          type: string
 *          required: false
 *          example: wolfyre
 *          description: Filter by creator username
 *      - in: query
 *        name: sort
 *        schema:
 *          type: string
 *          enum: [asc, desc]
 *          required: false
 *          description: Order to sort by; defaults to DESC
 *          example: desc
 *      - in: query
 *        name: page
 *        schema:
 *          type: integer
 *          required: false
 *          description: Page number to display, defaults to 1
 *          example: 1
 *     responses:
 *       200:
 *         description: Missions successfully retrieved
 */
missionRouter.get('/', missionController.retrieveAllMissions)

export default missionRouter
