"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const albums_middlewares_1 = require("../middlewares/albums.middlewares");
const albumRoutes = (0, express_1.Router)();
albumRoutes.get('/', albums_middlewares_1.getAlbumById);
exports.default = albumRoutes;
