import { Router } from "express";
import {
    createPlaylist,
    deletePlaylistById,
    getPlaylistsByUser,
    getSinglePlaylist,
    updatePlaylistById,
} from "../middlewares/playlists.middlewares";
const playlistsRouter = Router();

playlistsRouter.get("/:id", getSinglePlaylist);
playlistsRouter.post("/", createPlaylist);
playlistsRouter.put("/:id", updatePlaylistById);
playlistsRouter.delete("/:id", deletePlaylistById);
playlistsRouter.get("/user/:userId", getPlaylistsByUser);

export { playlistsRouter };
