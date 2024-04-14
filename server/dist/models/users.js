"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUser = exports.updateUserById = exports.deleteUserById = exports.addUser = exports.getUserByEmail = exports.getUserById = exports.getUsers = exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
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
    },
    likedArtists: {
        type: Array({
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
        })
    }
});
const UserModel = mongoose_1.default.model("users", UserSchema);
exports.UserModel = UserModel;
const getUsers = () => UserModel.find();
exports.getUsers = getUsers;
const getUserById = (id) => UserModel.findById(id);
exports.getUserById = getUserById;
const getUserByEmail = (email) => UserModel.findOne({ email: email });
exports.getUserByEmail = getUserByEmail;
const addUser = (value) => new UserModel(value)
    .save().then(user => user.toObject());
exports.addUser = addUser;
const deleteUserById = (id) => UserModel.findOneAndDelete({ _id: id });
exports.deleteUserById = deleteUserById;
const updateUserById = (id, user) => UserModel.findByIdAndUpdate(id, user, { new: true });
exports.updateUserById = updateUserById;
const verifyUser = (password, username, email) => {
    if (username)
        return UserModel.findOne({ username: username, password: password });
    if (email)
        return email && UserModel.findOne({ email: email, password: password });
};
exports.verifyUser = verifyUser;
