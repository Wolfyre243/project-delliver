//-----------------------------------IMPORT-----------------------------------
// Import .env variables
import 'dotenv/config';

// Import App from src directory
import app from './src/app.js';

//---------------------------------ENTRY POINT--------------------------------
// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});


