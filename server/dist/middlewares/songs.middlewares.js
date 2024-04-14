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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFavoriteSong = exports.addFavoriteSong = exports.getSongs = void 0;
const axios_1 = __importDefault(require("axios"));
const users_1 = require("../models/users");
const getSongs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.query.artist) {
            const request = yield axios_1.default.request({
                method: "GET",
                url: `${process.env.API_URL}/search/artist`,
                params: {
                    q: `${req.query.artist}`,
                },
            });
            if (request.status === 200) {
                res.json(request.data.data);
            }
        }
        if (req.query.album) {
            const request = yield axios_1.default.request({
                method: "GET",
                url: `${process.env.API_URL}/search/album`,
                params: {
                    q: req.query.album,
                },
            });
            if (request.status === 200) {
                res.json(request.data.data);
            }
        }
        if (req.query.song) {
            const request = yield axios_1.default.request({
                method: "GET",
                url: `${process.env.API_URL}/search`,
                params: {
                    q: req.query.song,
                },
            });
            if (request.status === 200) {
                res.json(request.data.data);
            }
            else {
                throw "request failed";
            }
        }
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500).json(e);
    }
});
exports.getSongs = getSongs;
const addFavoriteSong = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { song } = req.body;
        let user = null;
        user = (yield (0, users_1.getUserById)(id));
        user.likedSongs.push(song);
        const updatedUser = yield (0, users_1.updateUserById)(id, user);
        res.json(updatedUser);
    }
    catch (e) {
        console.log(e);
    }
});
exports.addFavoriteSong = addFavoriteSong;
const deleteFavoriteSong = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { song } = req.body;
        const { id } = req.params;
        let user = null;
        user = (yield (0, users_1.getUserById)(id));
        user.likedSongs = user.likedSongs.filter((s) => s.id !== song.id);
        const updatedUser = yield (0, users_1.updateUserById)(id, user);
        res.json(updatedUser);
    }
    catch (e) {
        res.json(e);
    }
});
exports.deleteFavoriteSong = deleteFavoriteSong;
