import { Request, Response } from "express";

import { UserModel } from "./userModel";


export const createUser = async (req: Request, res: Response) => {
    const role = "student";
    const active = false;
    const disabled =  false;

    try {
        const record = await UserModel.create({...req.body, role, active, disabled});
        return res.status(201).json({record, message: "User created successfully"});

    } catch (error) {
        return res.status(500).json({ message: "Something went wrong"});
    }
    
}

export const getUsers = async (req: Request, res: Response) => {
    const limit  = req.query?.limit as number | undefined;
    const offset  = req.query?.offset as number | undefined;
    try {
        const users = await UserModel.findAndCountAll({
            where:{
                disabled: false
            },
            limit,
            offset
        });
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong"});
    }
}

export const getUser =  async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await UserModel.findOne({where: {id}});
        if(!user){
            return res.status(404).json({message: `user with id = ${id} does not exists`});
        }
        return res.json(user);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong"});
    }
}

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const user = await UserModel.findOne({where: { id }});
        if(!user){
            return res.status(404).json({message: `user with id = ${id} does not exists`});
        }

        //const updatedUser = await UserModel.update({});
        
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong"});
    }
}

export const deleteUser =  async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const user = await UserModel.findOne({where: { id }});
        if(!user){
            return res.json({message: `user with id = ${id} does not exists`});
        }

        const deletedUser = await user.destroy();
        return res.json({record: deletedUser});
        
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong"});
    }
}