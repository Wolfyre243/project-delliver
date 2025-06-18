//-----------------------------------IMPORT-----------------------------------
// Import .env variables
import 'dotenv/config';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

// Import App from src directory
import app from './src/app.js';

//---------------------------------ENTRY POINT--------------------------------
// Configure swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
        title: 'HealthNest API',
        version: '1.0.0',
        description: 'API documentation using Swagger',
    },
    servers: [
        { url: `http://localhost:${process.env.PORT}/api` }
    ]
  },
  apis: [`./src/routes/*.js`], // Path to your API docs
};

let swaggerDocs;
try {
  swaggerDocs = swaggerJsDoc(swaggerOptions);
} catch (error) {
  console.error('swagger-jsdoc error:', error);
}

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});


