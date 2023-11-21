import { Router } from "express";
import { getAlbumById } from "../middlewares/albums.middlewares";
const albumRoutes = Router()

albumRoutes.get('/', getAlbumById)

export default albumRoutes