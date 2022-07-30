import { DataTypes, Model, Optional } from "sequelize";

import db from "../config/database.config";


interface UserAttributes {
    id: Number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: "student" | "admin";
    active: boolean;
    disabled: boolean;
}

type UserCreationAttributes = Optional<UserAttributes, 'id'>;


export class User extends Model<UserAttributes, UserCreationAttributes> {}


User.init({
   id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
   },
   firstName:{
    type: DataTypes.STRING,
    allowNull: false,
    field: "first_name"
   },
   lastName:{
    type: DataTypes.STRING,
    allowNull: false,
    field: "last_name"
   },
   email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
   },
   password: {
    type: DataTypes.STRING,
    allowNull: false
   },
   role: {
    type: DataTypes.STRING,
    allowNull: false
   },
   active: {
    type: DataTypes.BOOLEAN,
    allowNull: false
   },
   disabled: {
    type: DataTypes.BOOLEAN,
    allowNull: false
   }
},{
    sequelize: db,
    tableName: "users",
    modelName: "User"
})