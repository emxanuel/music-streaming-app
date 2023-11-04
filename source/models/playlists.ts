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
                link: String
            },
        }),
    }
})

const PlaylistModel = mongoose.model("playlists", PlaylistSchema)
const getUserPlaylist = (id: string) => PlaylistModel.find({'owner.id': id})
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