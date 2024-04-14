"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const songs_middlewares_1 = require("../middlewares/songs.middlewares");
const songsRouter = (0, express_1.Router)();
songsRouter.get('/', songs_middlewares_1.getSongs);
songsRouter.post('/user/:id/liked', songs_middlewares_1.addFavoriteSong);
songsRouter.put('/user/:id/liked', songs_middlewares_1.deleteFavoriteSong);
exports.default = songsRouter;
