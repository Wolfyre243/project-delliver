// Import dependencies
import 'dotenv/config'
import jwt from 'jsonwebtoken'

// Import models
import sessionModel from '../models/sessionModel.js'

// JWT Configuration
const accessSK = process.env.JWT_ACCESS_SECRET_KEY
const refreshSK = process.env.JWT_REFRESH_SECRET_KEY
const accessTokenDuration = process.env.JWT_ACCESS_EXPIRES_IN
const refreshTokenDuration = process.env.JWT_REFRESH_EXPIRES_IN
const tokenAlgorithm = process.env.JWT_ALGORITHM

import cookieOptions from '../configs/authConfig.js'

const controller = {}

controller.generateRefreshToken = (req, res, next) => {
  console.log('Generating Refresh Token...')

  const payload = {
    user_id: res.locals.user_id,
    session_id: res.locals.session_id,
    created_at: new Date(Date.now()),
  }

  const jwtConfig = {
    algorithm: tokenAlgorithm,
    expiresIn: refreshTokenDuration,
  }

  try {
    // Sign token
    const token = jwt.sign(payload, refreshSK, jwtConfig)
    res.locals.refresh_token = token
    console.log('✅|Successfully generated refresh token')
    return next()
  } catch (error) {
    console.error('❌|Error generating refresh token:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

controller.generateAccessToken = async (req, res, next) => {
  console.log('[GENERATE ACCESS]')
  const payload = {
    user_id: res.locals.user_id,
    session_id: res.locals.session_id,
    created_at: new Date(Date.now()),
  }

  const jwtConfig = {
    algorithm: tokenAlgorithm,
    expiresIn: accessTokenDuration,
  }

  try {
    // Sign token
    const token = jwt.sign(payload, accessSK, jwtConfig)

    // Store access token in DB
    await sessionModel.updateAccessToken(token, res.locals.session_id)

    res.locals.access_token = token
    console.log('✅|Successfully generated access token')
    next()
  } catch (error) {
    console.error('❌|Error generating access token:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

controller.verifyToken = async (req, res, next) => {
  console.log('[VERIFY ACCESS]')
  // Bearer <token>
  const token = req.headers['authorization']?.split(' ')[1]

  try {
    if (!token) throw { status: 401, message: 'Unauthorized: No access token' }

    const payload = jwt.verify(token, accessSK)

    console.log(
      `[DEBUG] Access token expires in ${((payload.exp * 1000 - Date.now()) / (60 * 1000)).toFixed(2)} mins`
    )

    const session = await sessionModel.retrieveById(payload.session_id)

    // If session not found OR session inactive
    if (!session)
      throw { status: 403, message: 'Invalid access token provided' }

    if (!session.is_active) throw { status: 403, message: 'Session expired.' }

    res.locals.user = {
      user_id: payload.user_id,
      session_id: payload.session_id,
    }

    console.log('✅|Successfully verified access token')
    return next()
  } catch (error) {
    console.log('❌|Error verifying access token: ', error.message)

    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Access token expired' })
    } else if (error.name === 'JsonWebTokenError') {
      return res.status(403).json({ message: 'Invalid access token provided' })
    } else if (error.status) {
      // Custom error msg
      return res.status(error.status).json({ message: error.message })
    } else return res.status(500).json({ message: 'Internal server error' })
  }
}

controller.verifyRefreshToken = async (req, res, next) => {
  console.log('[VERIFY REFRESH]')
  const token = req.cookies.refresh_token

  try {
    console.log('Checking refresh token...') // #DEBUG

    if (!token) {
      console.log('Refresh token not found.')
      throw { status: 403, message: 'Unauthorised: No refresh token' }
    }

    const payload = jwt.verify(token, refreshSK)

    console.log(
      `[DEBUG] Refresh token expires in ${((payload.exp * 1000 - Date.now()) / (60 * 1000)).toFixed(2)} mins`
    )

    // Obtain session from database
    const session = await sessionModel.retrieveById(payload.session_id)

    // If session not found, token is invalid
    if (!session)
      throw { status: 403, message: 'Invalid refresh token provided' }

    if (!session.is_active) throw { status: 403, message: 'Session expired.' }

    res.locals.user_id = session.user_id
    res.locals.session_id = session.session_id
    console.log('✅|Successfully verified refresh token')
    return next()
  } catch (error) {
    console.log('❌|Error verifying refresh token:', error.message)

    // Automatically clear cookie if cookie is invalid
    res.clearCookie('refresh_token', cookieOptions)

    // If session is expired
    if (error.name === 'TokenExpiredError') {
      // If token expired, extract session to invalidate it
      const { session_id } = jwt.decode(token)
      return sessionModel
        .invalidateById(session_id)
        .then(() => {
          console.log('Successfully invalidated session')
          return res.status(403).json({ message: 'Refresh token expired' })
        })
        .catch((err) => {
          console.log(err.message)
          return res.status(err.status).json({ message: err.message })
        })
    } else if (error.name === 'JsonWebTokenError') {
      return res.status(403).json({ message: 'Invalid refresh token provided' })
    } else if (error.status) {
      return res.status(error.status).json({ message: error.message })
    } else return res.status(500).json({ message: 'Internal server error' })
  }
}

controller.checkAccessToken = async (req, res, next) => {
  console.log('[CHECK ACCESS]')

  const { session_id } = res.locals

  try {
    const { access_token: accessToken } =
      await sessionModel.retrieveById(session_id)

    const payload = jwt.verify(accessToken, accessSK)
    console.log(
      `[DEBUG] Access token expires in ${((payload.exp * 1000 - Date.now()) / (60 * 1000)).toFixed(2)} mins`
    )

    return res.status(200).json({ accessToken })
  } catch (error) {
    console.error('❌|Error checking access token:', error)

    if (
      error.name === 'TokenExpiredError' ||
      error.name === 'JsonWebTokenError'
    ) {
      return next() // regenerate a new access token
    } else if (error.status) {
      // Custom error msg
      return res.status(error.status).json({ message: error.message })
    }

    return res.status(500).json({ message: 'Internal server error' })
  }
}

controller.setTokens = (req, res, next) => {
  // Destructure from res.locals and set into respective places
  const { access_token: accessToken, refresh_token: refreshToken } = res.locals

  res
    .status(200)
    .cookie('refresh_token', refreshToken, cookieOptions)
    .json({ accessToken })
}

export default controller
