const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Movies API',
      description: 'Movies API Information',
      contact: {
        name: 'Developer'
      },
      servers: ['http://localhost:3000']
    }
  },
  apis: ['app.js', 'routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     parameters:
 *       - in: body
 *         name: user
 *         description: The user to create
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - password
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *             gender:
 *               type: string
 *             role:
 *               type: string
 *     responses:
 *       200:
 *         description: User created
 *       500:
 *         description: Internal server error
 */

// Add similar Swagger comments for all other routes
