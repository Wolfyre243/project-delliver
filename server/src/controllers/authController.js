// Import dependencies
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// Import services
import userModel from '../models/userModel.js'
import sessionModel from '../models/sessionModel.js'
import {
  UNIQUE_VIOLATION_ERROR,
  EMPTY_RESULT_ERROR,
  RAISE_EXCEPTION,
} from '../configs/errors.js'

// Import secrets
const verifySK = process.env.JWT_VERIFY_SECRET_KEY
const verifyTokenDuration = process.env.JWT_VERIFY_EXPIRES_IN
const tokenAlgorithm = process.env.JWT_ALGORITHM

import cookieOptions from '../configs/authConfig.js'

const controller = {}

controller.login = async (req, res, next) => {
  const { username, password } = req.body

  try {
    const userData = await userModel
      .retrieveByUsername(username)
      .catch((error) => {
        console.error(error)
        return error
      })

    if (userData instanceof EMPTY_RESULT_ERROR) {
      throw { status: 401, message: 'Invalid username or password.' }
    }

    if (!(await bcrypt.compare(password, userData.password))) {
      throw { status: 401, message: 'Invalid username or password.' }
    }

    res.locals.user_id = userData.user_id
    res.locals.user_role = userData.user_role
    return next()
  } catch (error) {
    console.error('Login error: ', error)
    // Check for custom error msg
    if (error.status && error.message) {
      return res.status(error.status).json({ message: error.message })
    }
    // Send 500 error response back
    return res.status(500).json({ message: 'Internal server error' })
  }
}

controller.register = async (req, res, next) => {
  debugger
  const {
    username,
    email,
    password,
    confirmPassword,
    fname,
    lname,
    exerciseDuration,
    history,
  } = req.body

  const jwtConfig = {
    algorithm: tokenAlgorithm,
    expiresIn: verifyTokenDuration,
  }

  try {
    if (password !== confirmPassword) {
      throw { status: 409, message: 'Passwords do not match.' }
    }

    const passwordHash = bcrypt.hashSync(
      password,
      parseInt(process.env.BCRYPT_SALTROUNDS)
    )

    userModel
      .insertSingle(
        username,
        email,
        passwordHash,
        fname,
        lname,
        exerciseDuration,
        history
      )
      .then(async (result) => {
        // Email Verification
        debugger
        const payload = {
          user_id: result.o_user_id,
          email: email,
          created_at: new Date(Date.now()),
        }

        const verificationToken = jwt.sign(payload, verifySK, jwtConfig)
        const verifyUrl = `http://localhost:${process.env.FRONTEND_PORT}/verified?token=${verificationToken}`

        res.locals.email = email
        res.locals.mail_content = {
          subject: 'Verify your email',
          html: `
                        <p>Hi ${fname},<br/><br/>
                        Please verify your email by clicking the link below:<br/><a href="${verifyUrl}">Verify Email</a><br/><br/>
                        The link will expire in ${verifyTokenDuration}.<br/><br/>
                        Regards,<br/>
                        The HealthNest Team</p>
                    `,
        }
        res.locals.user_id = result.o_user_id
        return next()
      })
      .catch((error) => {
        console.log(`[DEBUG] ${error}`)
        if (
          error instanceof UNIQUE_VIOLATION_ERROR ||
          error instanceof RAISE_EXCEPTION
        ) {
          return res.status(error.status).json({ message: error.message })
        }
      })
  } catch (error) {
    if (!error.status) {
      return res.status(500).json({ error: 'Internal server error' })
    }
    return res.status(error.status).json({ message: error.message })
  }
}

controller.logout = async (req, res, next) => {
  // const token = req.cookies.refresh_token;
  const { session_id } = res.locals

  try {
    res.clearCookie('refresh_token', cookieOptions)
    return sessionModel
      .invalidateById(session_id)
      .then(() => {
        console.log('Successfully invalidated session')
        res.sendStatus(204)
      })
      .catch((err) => {
        console.log(err.message)
        return res.status(err.status).json({ message: err.message })
      })
  } catch (error) {
    console.log('Error logging out:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

controller.verifyEmail = async (req, res, next) => {
  const { token } = req.query

  try {
    if (!token) throw { status: 401, message: 'No verification token provided' }

    const payload = jwt.verify(token, verifySK)

    console.log(
      `[DEBUG] Verification token expires in ${((payload.exp * 1000 - Date.now()) / (60 * 1000)).toFixed(2)} mins`
    )

    const { user_id, email } = payload
    if (!user_id || !email)
      throw { status: 401, message: 'Invalid verification token provided' }

    await userModel.verifyUser(user_id, email)

    res.status(204).send()
  } catch (error) {
    console.log('Error verifying verification token: ', error.message)

    if (error.name === 'TokenExpiredError') {
      return res.status(403).json({ message: 'Verification token expired' })
    } else if (error.name === 'JsonWebTokenError') {
      return res
        .status(403)
        .json({ message: 'Invalid verification token provided' })
    } else if (error.status) {
      // Custom error msg
      return res.status(error.status).json({ message: error.message })
    } else return res.status(500).json({ message: 'Internal server error' })
  }
}

export default controller
