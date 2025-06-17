//------------------------------IMPORT---------------------------------
// Import dependencies
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// Import routers
import mainRouter from './routes/mainRoutes.js';

import cookieOptions from './configs/authConfig.js';

//----------------------------SET UP APP--------------------------------
// Create server
const app = express();

// Set up middleware
// Read cookies
app.use(cookieParser(cookieOptions));
app.use(cors({ 
  // TODO: Add production URL (from env?)
  origin: `http://localhost:5173`,
  credentials: true 
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Bring in main routes
app.use('/api', mainRouter);

app.get('/api', (req, res) => {
  res.send("Server is online!")
});

// Export server
export default app;