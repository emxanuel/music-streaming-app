import { Router } from "express";
import { createPlaylist, deletePlaylistById, getPlaylistsByUser, updatePlaylistById } from "../middlewares/playlists.middlewares";
const playlistsRouter = Router()

playlistsRouter.get('/:userId', getPlaylistsByUser)
playlistsRouter.post('/', createPlaylist)
playlistsRouter.put('/:id', updatePlaylistById)
playlistsRouter.delete('/:id', deletePlaylistById)

export {
    playlistsRouter
}