import mongoose from "mongoose";
import { IUser } from "../types";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    phone: {
        type: String,
    },
    country: {
        type: String,
    },
});

const UserModel = mongoose.model("users", UserSchema);
const getUsers = () => UserModel.find();
const getUserById = (id: string) => UserModel.findById(id)
const getUserByEmail = (email: string) => UserModel.findOne({email: email})
const addUser = (value: Record<string,  any>) => new UserModel(value)
    .save().then(user => user.toObject())
const deleteUserById = (id: string) => UserModel.findOneAndDelete({_id: id})
const updateUserById = (id: string, user: IUser) => UserModel.findOneAndUpdate({_id: id}, user)

export { 
    UserModel, 
    getUsers,
    getUserById,
    getUserByEmail,
    addUser,
    deleteUserById,
    updateUserById
};
