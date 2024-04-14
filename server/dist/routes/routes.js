"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const users_routes_1 = __importDefault(require("./users.routes"));
const playlists_routes_1 = require("./playlists.routes");
const songs_routes_1 = __importDefault(require("./songs.routes"));
const auth_routes_1 = __importDefault(require("./auth.routes"));
const albums_routes_1 = __importDefault(require("./albums.routes"));
const artists_routes_1 = require("./artists.routes");
router.get('/api', (req, res) => {
    res.send('Welcome');
});
router.use('/api/users', users_routes_1.default);
router.use('/api/playlists', playlists_routes_1.playlistsRouter);
router.use('/api/songs', songs_routes_1.default);
router.use('/api/auth', auth_routes_1.default);
router.use('/api/album', albums_routes_1.default);
router.use('/api/artists', artists_routes_1.artistsRouter);
module.exports = router;
