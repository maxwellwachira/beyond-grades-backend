import { Request, Response } from "express";

import { UserModel } from "./userModel";


export const createUser = async (req: Request, res: Response) => {
    const role = "student";
    const active = false;
    const disabled =  false;

    try {
        const record = await UserModel.create({...req.body, role, active, disabled});
        return res.json({record, message: "User created successfully"});

    } catch (error) {
        return res.json({message: "failed to create", status: 500, route: '/users'});
    }
    
}

export const getUsers = async (req: Request, res: Response) => {
    const limit  = req.query?.limit as number | undefined;
    const offset  = req.query?.offset as number | undefined;
    try {
        const users = await UserModel.findAll({
            where:{
                disabled: false
            },
            limit,
            offset
        });
        return res.json(users);
    } catch (error) {
        return res.json({message: "failed to fetch users", status: 500, route: '/users'});
    }
}

export const getUser =  async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await UserModel.findOne({where: {id}});
        if(!user){
            return res.json({message: `user with id = ${id} does not exists`});
        }
        return res.json(user);
    } catch (error) {
        return res.json({message: "failed to fetch user", status: 500, route: '/users/:id'});
    }
}

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const user = await UserModel.findOne({where: { id }});
        if(!user){
            return res.json({message: `user with id = ${id} does not exists`});
        }

        //const updatedUser = await UserModel.update({});
        
    } catch (error) {
        return res.json({message: "failed to update user", status: 500, route: '/users/:id'});
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
        return res.json({message: "failed to update user", status: 500, route: '/users/:id'});
    }
}