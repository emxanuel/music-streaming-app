import { Router } from "express";
import { addFavoriteSong, deleteFavoriteSong, getSongs } from "../middlewares/songs.middlewares";
const songsRouter = Router()

songsRouter.get('/', getSongs)
songsRouter.post('/user/:id/liked', addFavoriteSong)
songsRouter.put('/user/:id/liked', deleteFavoriteSong)

export default songsRouter