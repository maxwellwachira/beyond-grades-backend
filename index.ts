import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';

import db from './src/config/database.config'; 
import { swaggerOptions } from './src/docs';

import authRoutes from './src/authentication/emailauth/authController';
import userRoutes from "./src/users/userController";
import googleAuthRoutes from './src/authentication/googleauth/googleauthController';
import twitterAuthRoutes from './src/authentication/twitterauth/twitterauthController';


dotenv.config();

const dbAuthenticate = async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
    //create Tables
    await db.sync();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

dbAuthenticate();

const app: Express = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOptions));

app.use(bodyParser.json({limit: "30mb"}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const port = process.env.PORT;

app.use('/auth', authRoutes);
app.use('/googleauth', googleAuthRoutes);
app.use('/twitterauth', twitterAuthRoutes);
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
