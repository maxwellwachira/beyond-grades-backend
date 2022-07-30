import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';


import db from './src/config/database.config'; 
import userRoutes from "./src/users/UserController";

dotenv.config();

const app: Express = express();

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));


const port = process.env.PORT;

const dbAuthenticate = async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

dbAuthenticate();

app.use('/user', userRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
