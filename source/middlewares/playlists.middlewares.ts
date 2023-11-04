import { Request, Response } from "express";
import {
    addPlaylist,
    deletePlaylist,
    getPlaylistById,
    getUserPlaylist,
    updatePlaylist,
} from "../models/playlists";
import { IPlaylist } from "../types";

const getPlaylistsByUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const playlist = await getUserPlaylist(userId);
        res.send(playlist);
    } catch (e) {
        res.sendStatus(400).json(e);
    }
};

const getSinglePlaylist = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const playlist = await getPlaylistById(id);
        res.send(playlist);
    } catch (e) {
        res.sendStatus(500).json(e);
    }
};

const createPlaylist = async (req: Request, res: Response) => {
    try {
        const playlist = req.body as IPlaylist;
        const addedPlaylist = await addPlaylist(playlist);
        res.json(addedPlaylist);
    } catch (e) {
        console.error(e);
        res.json(e);
    }
};

const updatePlaylistById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const { songs } = req.body;

        const playlist = (await getPlaylistById(id)) as IPlaylist;
        playlist.songs = songs;
        const updatedPlaylist = await updatePlaylist(id, playlist);
        res.json(updatedPlaylist);
    } catch (e) {
        console.error(e);
        res.sendStatus(500).json(e);
    }
};

const deletePlaylistById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const deletedPlaylist = await deletePlaylist(id);
        res.json(deletedPlaylist);
    } catch (e) {
        console.error(e);
        res.sendStatus(500).json(e);
    }
};

export {
    getPlaylistsByUser,
    createPlaylist,
    updatePlaylistById,
    deletePlaylistById,
    getSinglePlaylist,
};
