import { Router } from "express";
import {
    getArtist,
    getArtistAlbums,
    getArtistSongs,
    getRelatedArtists,
    likeArtist,
    unlikeArtist,
} from "../middlewares/artists.middlewares";
const artistsRouter = Router();

artistsRouter.get("/:id", getArtist);
artistsRouter.get("/:id/:limit/songs", getArtistSongs);
artistsRouter.get("/:id/:limit/related", getRelatedArtists);
artistsRouter.get("/:id/albums", getArtistAlbums);
artistsRouter.put("/user/:id/like", likeArtist)
artistsRouter.put("/user/:id/unlike", unlikeArtist)

export { artistsRouter };
