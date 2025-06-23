// Import
import query from '../services/db.js'
import {
  UNIQUE_VIOLATION_ERROR,
  EMPTY_RESULT_ERROR,
  RAISE_EXCEPTION,
  SQL_ERROR_CODE,
} from '../configs/errors.js'

const model = {}

model.retrieveAll = async (user_id) => {
  const sql = `
    SELECT * FROM conversation
    WHERE user_id = $1
    ORDER BY created_at DESC;
  `

  return query(sql, [user_id]).then((result) => {
    const { rows } = result
    return rows
  })
}

model.retrieveAllMessages = async (conversation_id) => {
  const sql = `
    SELECT * FROM conversationmessage
    WHERE conversation_id = $1
    ORDER BY created_at ASC;
  `

  return query(sql, [conversation_id]).then((result) => {
    const { rows } = result
    return rows
  })
}

model.retrieveConversationById = async (conversation_id) => {
  const sql = `
        SELECT * FROM conversation
        WHERE conversation_id = $1;
    `

  return query(sql, [conversation_id]).then((result) => {
    const { rows } = result
    if (rows.length === 0) {
      throw new EMPTY_RESULT_ERROR(404, 'Conversation not found.')
    }
    return rows[0]
  })
}

model.createConversation = async (user_id, title) => {
  const sql = `
        INSERT INTO conversation (user_id, title)
        VALUES ($1, $2)
        RETURNING *;
    `

  return query(sql, [user_id, title]).then((result) => {
    const { rows } = result
    return rows[0]
  })
}

model.insertMessage = async (conversation_id, role, message) => {
  const sql = `
        INSERT INTO conversationmessage (conversation_id, role, message)
        VALUES ($1, $2, $3);
    `

  return query(sql, [conversation_id, role, message]).then((result) => {
    console.log('Message inserted successfully')
  })
}

export default model
