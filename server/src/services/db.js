//--------------------------------IMPORT---------------------------------
import 'dotenv/config';

// Import dependencies
import pg from 'pg';

//---------------------------SET UP CONNECTION------------------------------
// Create settings for database connection
const pool = new pg.Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    max: process.env.DB_CONNECTION_LIMIT,
    ssl: true,
});

// Monkey Patching .query method
// Store the old query method
const oldQuery = pool.query;
// Monkey patch the new query method to log all queries being made
pool.query = function (...args) {
    const [sql, params] = args;
    console.log(`EXECUTING QUERY |`, sql, params);
    return oldQuery.apply(pool, args);
};

// Export the pool for usage elsewhere
export default pool;