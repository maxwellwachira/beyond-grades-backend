import express from 'express';

import { signIn, signUp } from './authService';
import authValidator from './authValidator';
import { validationMiddleware } from '../../middleware/validationMiddleware';

const router = express.Router();

//sign-in route
router.post('/sign-in', authValidator.checkSignIn(), validationMiddleware, signIn);
//sign-up route
router.post('/sign-up', authValidator.checkSignUp(), validationMiddleware, signUp);

export default router;