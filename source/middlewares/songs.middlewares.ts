import { Request, Response } from "express";
import axios from "axios";
import { IUser } from "../types";
import { addUser, getUserById, updateUserById } from "../models/users";

export const getSongs = async (req: Request, res: Response) => {
    try {
        if (req.query.artist) {
            const request = await axios.request({
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
            const request = await axios.request({
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
            const request = await axios.request({
                method: "GET",
                url: `${process.env.API_URL}/search`,
                params: {
                    q: req.query.song,
                },
            });
            if (request.status === 200) {
                res.json(request.data.data);
            } else {
                throw "request failed";
            }
        }
    } catch (e) {
        console.error(e);
        res.sendStatus(500).json(e);
    }
};

export const addFavoriteSong = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { song } = req.body;
        let user: IUser | null = null;
        user = (await getUserById(id)) as IUser;
        user.likedSongs.push(song);
        const updatedUser = await updateUserById(id, user);
        res.json(updatedUser);
    } catch (e) {
        console.log(e);
    }
};

export const deleteFavoriteSong = async (req: Request, res: Response) => {
    try {
        const { song } = req.body;
        const { id } = req.params;
        let user: IUser | null = null;
        user = (await getUserById(id)) as IUser;
        user.likedSongs = user.likedSongs.filter((s) => s.id !== song.id);
        const updatedUser = await updateUserById(id, user);
        res.json(updatedUser);
    } catch (e) {
        res.json(e);
    }
};