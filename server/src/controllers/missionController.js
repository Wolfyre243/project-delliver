// Import dependencies
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// Import services
import missionModel from '../models/missionModel.js'
import {
  UNIQUE_VIOLATION_ERROR,
  EMPTY_RESULT_ERROR,
  RAISE_EXCEPTION,
} from '../configs/errors.js'

const controller = {}

controller.retrieveAllMissions = async (req, res, next) => {
  let { search, category, creator, sort, page } = req.query

  sort = ['asc', 'desc'].includes(sort) ? sort : 'desc' // If invalid sort provided, default to 'desc'

  const limit = 10

  // If a single category is provided, add it into the array
  if (!category) {
    category = null
  } else if (!Array.isArray(category)) {
    // If a single category is provided, add it into the array
    category = [category]
  }

  const { count: missionCount } = await missionModel.retrieveMissionCount(
    search,
    category,
    creator
  )

  return missionModel
    .retrieveAll(search, category, creator, sort, page ?? 1, limit)
    .then((result) => {
      return res.status(200).json({
        result,
        totalPages: Math.ceil(missionCount / limit),
      })
    })
    .catch((error) => {
      console.error('Error reading all missions:', error)
      return res.status(500).json({ message: 'Internal server error' })
    })
}

export default controller
