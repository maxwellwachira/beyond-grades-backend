import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { UserModel } from "../../users/userModel";

dotenv.config();

const SECRET_KEY = 'mechatronisistherealcourseinkimathi';
const EXPIRE_TIME = process.env.EXPIRE_TIME;

export const signIn = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        //check if user already exists otherwise return error message
        const user = await UserModel.findOne({
            where:{
                email,
                disabled: false,       
            }
        });

        if(!user) return res.status(404).json({message: "user does not exists"});

        //check if the entered password is correct otherwise return error message
        const userObject = JSON.parse(JSON.stringify(user));
        const isPasswordCorrect = await bcrypt.compare(password, userObject.password);
        if (!isPasswordCorrect) return res.status(400).json({message: "Invalid credentials"});

         //return token to user
         const token = jwt.sign({ email: userObject.email, id:userObject.id}, SECRET_KEY, { expiresIn: EXPIRE_TIME }); 
         return res.status(200).json({ token });

    } catch (error) {
        return res.status(500).json({ message: "Something went wrong"});
    }
}

export const signUp = async (req: Request, res: Response) => {
    const role = "student";
    const active = false;
    const disabled =  false;

    const { firstName, lastName, email, password } = req.body;

    try {
        //check if user already exists before signing up otherwise return error message
        const user = await UserModel.findOne({where: {email}});
        if(user) return res.status(400).json({message: "user already exists"});

        // hash password
        const hashedPassword =  await bcrypt.hash(password, 12);

        //Add user to database
        const record = await UserModel.create({firstName, lastName, email, password: hashedPassword, role, active, disabled});

        const result = JSON.parse(JSON.stringify(record));

        //return token to user
        const token = jwt.sign({ email: result.email, id:result._id}, SECRET_KEY, { expiresIn: EXPIRE_TIME });

        return res.status(201).json({token, record, message: "User created successfully"});

    } catch (error) {
        return res.status(500).json({ message: "Something went wrong"});
    }
    
}