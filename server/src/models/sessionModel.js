import query from '../services/db.js';
import { UNIQUE_VIOLATION_ERROR, EMPTY_RESULT_ERROR, RAISE_EXCEPTION, SQL_ERROR_CODE } from '../configs/errors.js';

const model = {};

model.insertSingle = async (user_id) => {
    const sql = `
    INSERT INTO sessions (user_id)
    VALUES ($1)
    RETURNING *;
    `;

    return query(sql, [user_id]).then((result) => {
        console.log("Session created successfully");
        const { rows } = result;
        return rows[0];
    });
}

model.updateAccessToken = async (access_token, session_id) => {
    const sql = `
    UPDATE sessions
    SET access_token = $1
    WHERE session_id = $2;
    `;

    return query(sql, [access_token, session_id]).then((result) => {
        console.log("Session updated successfully");
    });
}

model.retrieveById = async (session_id) => {
    const sql = `
    SELECT * FROM sessions 
    WHERE session_id = $1;
    `
    return query(sql, [session_id]).then((result) => {
        const { rows } = result;
        if (rows.length === 0) {
            throw new EMPTY_RESULT_ERROR(404, "Session not found");
        }
        return rows[0];
    });
}

model.invalidateById = async (session_id) => {
    const sql = `
    UPDATE sessions
    SET is_active = false, logout_at = CURRENT_TIMESTAMP
    WHERE session_id = $1;
    `
    return query(sql, [session_id]).then((result) => {
        if (!result.rowCount) {
            throw { status: 403, message: "Inavlid session ID" }
        }
    });
}

export default model;