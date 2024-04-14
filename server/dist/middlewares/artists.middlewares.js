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
exports.unlikeArtist = exports.likeArtist = exports.getArtistAlbums = exports.getRelatedArtists = exports.getArtistSongs = exports.getArtist = void 0;
const axios_1 = __importDefault(require("axios"));
const users_1 = require("../models/users");
const getArtist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const request = yield axios_1.default.get(`${process.env.API_URL}/artist/${id}`);
        if (request.status === 200) {
            res.json(request.data);
        }
        else {
            throw "request failed";
        }
    }
    catch (e) {
        console.log(e);
    }
});
exports.getArtist = getArtist;
const getArtistSongs = (req, res) => {
    try {
        const { id, limit } = req.params;
        axios_1.default
            .get(`${process.env.API_URL}/artist/${id}/top?limit=${limit}`)
            .then((response) => {
            res.json(response.data.data);
        })
            .catch((e) => {
            throw new Error(e);
        });
    }
    catch (e) {
        console.log(e);
    }
};
exports.getArtistSongs = getArtistSongs;
const getRelatedArtists = (req, res) => {
    try {
        const { id, limit } = req.params;
        axios_1.default
            .get(`${process.env.API_URL}/artist/${id}/related?limit=${limit}`)
            .then(response => {
            res.json(response.data.data);
        })
            .catch(e => {
            throw new Error(e);
        });
    }
    catch (e) {
        console.log(e);
    }
};
exports.getRelatedArtists = getRelatedArtists;
const getArtistAlbums = (req, res) => {
    try {
        const { id } = req.params;
        axios_1.default
            .get(`${process.env.API_URL}/artist/${id}/albums`)
            .then(response => {
            res.json(response.data.data);
        })
            .catch(e => {
            throw new Error(e);
        });
    }
    catch (e) {
        console.log(e);
    }
};
exports.getArtistAlbums = getArtistAlbums;
const likeArtist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { artist } = req.body;
        let user = null;
        user = (yield (0, users_1.getUserById)(id));
        user.likedArtists.push(artist);
        const updatedUser = yield (0, users_1.updateUserById)(id, user);
        res.json(updatedUser);
    }
    catch (e) {
        console.log(e);
    }
});
exports.likeArtist = likeArtist;
const unlikeArtist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { artist } = req.body;
        let user = null;
        user = (yield (0, users_1.getUserById)(id));
        user.likedArtists = user.likedArtists.filter(a => a.id !== artist.id);
        const updatedUser = yield (0, users_1.updateUserById)(id, user);
        res.json(updatedUser);
    }
    catch (e) {
        console.log(e);
    }
});
exports.unlikeArtist = unlikeArtist;
