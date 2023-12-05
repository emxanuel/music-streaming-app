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
    password: {
        type: String
    },
    phone: {
        type: String,
    },
    country: {
        type: String,
    },
    likedSongs: {
        type: Array({
            id: String,
            title: String,
            link: String,
            duration: Number,
            explicitLyrics: Boolean,
            preview: String,
            artist: {
                id: Number,
                name: String,
                link: String,
                share: String,
                picture: String,
                picture_small: String,
                picture_medium: String,
                picture_big: String,
                picture_xl: String,
                nb_album: Number,
                nb_fan: Number,
                radio: Boolean,
                tracklist: String,
            },
            album: {
                id: Number,
                title: String,
                link: String,
                share: String,
                cover: String,
                cover_small: String,
                cover_medium: String,
                cover_big: String,
                cover_xl: String,
                duration: String,
                artist: String,
                tracks: [],
            },
        })
    }
});

const UserModel = mongoose.model("users", UserSchema);
const getUsers = () => UserModel.find();
const getUserById = (id: string) => UserModel.findById(id)
const getUserByEmail = (email: string) => UserModel.findOne({email: email})
const addUser = (value: Record<string,  any>) => new UserModel(value)
    .save().then(user => user.toObject())
const deleteUserById = (id: string) => UserModel.findOneAndDelete({_id: id})
const updateUserById = (id: string, user: IUser) => UserModel.findByIdAndUpdate(id, user, {new: true})
const verifyUser = (username: string, password: string) => UserModel.findOne({username: username, password: password})

export { 
    UserModel, 
    getUsers,
    getUserById,
    getUserByEmail,
    addUser,
    deleteUserById,
    updateUserById,
    verifyUser
};
