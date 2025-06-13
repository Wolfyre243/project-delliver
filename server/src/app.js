//------------------------------IMPORT---------------------------------
// Import dependencies
import express from 'express';
import cookieParser from 'cookie-parser';

// Import routers
import mainRouter from './routes/mainRoutes.js';

// const { cookieOptions } = require('./configs/authConfig');

//----------------------------SET UP APP--------------------------------
// Create server
const app = express();

// Set up middleware
// Read cookies
// app.use(cookieParser(cookieOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Bring in main routes
app.use('/', mainRouter);

app.get('/', (req, res) => {
  res.send("Server is online!")
});

// Export server
export default app;