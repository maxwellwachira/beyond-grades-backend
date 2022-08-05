import express from 'express';

import { createUser, getUsers, getUser, updateUser, deleteUser } from './userService';
import UserValidator from "./userValidator";
import { validationMiddleware } from '../middleware/validationMiddleware';
import userValidator from './userValidator';

const router = express.Router();

//Create user
router.post('/', UserValidator.checkCreateUser(), validationMiddleware, createUser);
//Get all users
router.get('/', userValidator.checkGetUsers(), validationMiddleware, getUsers);
//Get one user
router.get('/:id', userValidator.checkIdParam(), validationMiddleware, getUser);
//Update user
router.put('/:id', userValidator.checkIdParam(), validationMiddleware, updateUser);
//Delete user
router.delete('/:id', userValidator.checkIdParam(), validationMiddleware, deleteUser);


export default router;