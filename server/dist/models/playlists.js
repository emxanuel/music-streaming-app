"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlaylistById = exports.deletePlaylist = exports.updatePlaylist = exports.addPlaylist = exports.getUserPlaylist = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const PlaylistSchema = new mongoose_1.default.Schema({
    name: {
        type: String
    }.type,
    owner: {
        type: {
            id: {
                type: String,
                required: true
            },
            username: String
        },
        required: true
    },
    createDate: {
        type: String,
        required: true
    },
    songs: {
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
        }),
    }
});
const PlaylistModel = mongoose_1.default.model("playlists", PlaylistSchema);
const getUserPlaylist = (id) => PlaylistModel.find({ 'owner.id': id });
exports.getUserPlaylist = getUserPlaylist;
const getPlaylistById = (id) => PlaylistModel.findById(id);
exports.getPlaylistById = getPlaylistById;
const addPlaylist = (playlist) => new PlaylistModel(playlist)
    .save().then(p => p.toObject());
exports.addPlaylist = addPlaylist;
const updatePlaylist = (id, playlist) => PlaylistModel.findOneAndUpdate({ _id: id }, playlist);
exports.updatePlaylist = updatePlaylist;
const deletePlaylist = (id) => PlaylistModel.findByIdAndDelete(id);
exports.deletePlaylist = deletePlaylist;
