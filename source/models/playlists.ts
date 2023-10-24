import mongoose, { pluralize } from "mongoose";
import { IPlaylist } from "../types";

const PlaylistSchema = new mongoose.Schema({
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
            title: String,
            artist: Array({
                name: String,
                link: String
            }),
            album: {
                name: String,
                link: String
            },
        })
    }
})

const PlaylistModel = mongoose.model("playlists", PlaylistSchema)
const getUserPlaylist = (id: string) => PlaylistModel.findOne({'owner.id': id})
const getPlaylistById = (id: string) => PlaylistModel.findById(id)
const addPlaylist = (playlist: Record<string, any>) => new PlaylistModel(playlist)
    .save().then(p => p.toObject())
const updatePlaylist = (id: string, playlist: IPlaylist) => PlaylistModel.findOneAndUpdate({_id: id}, playlist)
const deletePlaylist = (id: string) => PlaylistModel.findByIdAndDelete(id)

export {
    getUserPlaylist,
    addPlaylist,
    updatePlaylist,
    deletePlaylist,
    getPlaylistById
}