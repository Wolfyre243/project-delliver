// Import
import query from '../services/db.js'
import prisma from '../services/prisma.js'

import {
  UNIQUE_VIOLATION_ERROR,
  EMPTY_RESULT_ERROR,
  RAISE_EXCEPTION,
  SQL_ERROR_CODE,
} from '../configs/errors.js'

const model = {}

model.insertSingle = async (
  username,
  email,
  password,
  fname,
  lname,
  exerciseDuration,
  history
) => {
  // TODO: Create stored procedure
  const sql = `
        CALL register_user($1, $2, $3, $4, $5, $6, $7, $8);
    `
  return query(sql, [
    username,
    email,
    password,
    fname,
    lname,
    exerciseDuration,
    history,
    null,
  ])
    .then((result) => {
      const { rows } = result

      // If there is an error message, throw it
      if (rows.length == 1 && result.rows[0].errMsg) {
        throw new RAISE_EXCEPTION(500, result.rows[0].errMsg)
      }
      console.log('User inserted successfully') // #DEBUG
      return rows[0]
    })
    .catch((error) => {
      if (error.code === SQL_ERROR_CODE.UNIQUE_VIOLATION) {
        throw new UNIQUE_VIOLATION_ERROR(
          409,
          `Username or email already exists.`
        )
      }
      if (error.code === SQL_ERROR_CODE.RAISE_EXCEPTION) {
        // Thrown from a stored procedure, etc
        throw new RAISE_EXCEPTION(500, error.message)
      }

      throw error
    })
}

model.retrieveByUsername = async (username) => {
  const sql = `
    SELECT * FROM users
	WHERE username = $1;
    `
  return query(sql, [username]).then((result) => {
    const { rows } = result
    if (rows.length === 0) {
      throw new EMPTY_RESULT_ERROR(
        404,
        'User not found with the provided username.'
      )
    }
    return rows[0]
  })
}

model.retrieveByUserID = async (userID) => {
  const sql = `
    SELECT * FROM users WHERE user_id = $1
  `
  return query(sql, [userID]).then((result) => {
    const { rows } = result
    if (rows.length === 0) {
      throw new EMPTY_RESULT_ERROR(
        404,
        'User not found with the provided username.'
      )
    }
    return rows[0]
  })
}

model.retrieveAll = async () => {
  const sql = `
  SELECT user_id, email, username
  FROM users;
  `

  return query(sql).then((result) => {
    const { rows } = result
    return rows
  })
}

export default model
