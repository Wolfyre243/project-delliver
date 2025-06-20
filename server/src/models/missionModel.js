// Import
import query from '../services/db.js'
import {
  UNIQUE_VIOLATION_ERROR,
  EMPTY_RESULT_ERROR,
  RAISE_EXCEPTION,
  SQL_ERROR_CODE,
} from '../configs/errors.js'

const model = {}

model.retrieveAll = async (search, category, creator, sort, page, limit) => {
  const sql = `
    SELECT * FROM retrieve_all_missions($1, $2, $3, $4, $5)
    ORDER BY created_at ${sort};
  `

  return query(sql, [search, category, creator, page, limit]).then((result) => {
    const { rows } = result
    return rows
  })
}

model.retrieveMissionCount = async (search, category, creator) => {
  const sql = `
    SELECT COUNT(*)
    FROM mission m
    JOIN users u ON m.creator_id = u.user_id
    WHERE
      (
        m.mission_text LIKE '%' || COALESCE($1, '') || '%' OR
        u.username LIKE '%' || COALESCE($2, '') || '%'
      ) AND
      (m.category_id = ANY($3) OR array_length($3, 1) IS NULL) AND
      m.visibility = 'public';
  `

  return query(sql, [search, creator, category]).then((result) => {
    const { rows } = result
    return rows[0]
  })
}

export default model
