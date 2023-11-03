import { Router } from "express";
import { getSongs } from "../middlewares/songs.middlewares";
const songsRouter = Router()

songsRouter.get('/', getSongs)

export default songsRouter