"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSinglePlaylist = exports.deletePlaylistById = exports.updatePlaylistById = exports.createPlaylist = exports.getPlaylistsByUser = void 0;
const playlists_1 = require("../models/playlists");
const getPlaylistsByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const playlist = yield (0, playlists_1.getUserPlaylist)(userId);
        res.send(playlist);
    }
    catch (e) {
        res.sendStatus(400).json(e);
    }
});
exports.getPlaylistsByUser = getPlaylistsByUser;
const getSinglePlaylist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const playlist = yield (0, playlists_1.getPlaylistById)(id);
        res.send(playlist);
    }
    catch (e) {
        res.sendStatus(500).json(e);
    }
});
exports.getSinglePlaylist = getSinglePlaylist;
const createPlaylist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const playlist = req.body;
        const addedPlaylist = yield (0, playlists_1.addPlaylist)(playlist);
        res.json(addedPlaylist);
    }
    catch (e) {
        console.error(e);
        res.json(e);
    }
});
exports.createPlaylist = createPlaylist;
const updatePlaylistById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { songs } = req.body;
        const playlist = (yield (0, playlists_1.getPlaylistById)(id));
        playlist.songs = songs;
        const updatedPlaylist = yield (0, playlists_1.updatePlaylist)(id, playlist);
        res.json(updatedPlaylist);
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500).json(e);
    }
});
exports.updatePlaylistById = updatePlaylistById;
const deletePlaylistById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deletedPlaylist = yield (0, playlists_1.deletePlaylist)(id);
        res.json(deletedPlaylist);
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500).json(e);
    }
});
exports.deletePlaylistById = deletePlaylistById;
