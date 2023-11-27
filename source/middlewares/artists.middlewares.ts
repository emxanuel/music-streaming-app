import { Request, Response } from "express";
import axios from "axios";

export const getArtist = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const request = await axios.get(`${process.env.API_URL}/artist/${id}`);

        if (request.status === 200) {
            res.json(request.data);
        } else {
            throw "request failed";
        }
    } catch (e) {
        console.log(e);
    }
};

export const getArtistSongs = (req: Request, res: Response) => {
    try {
        const { id, limit } = req.params;

        axios
            .get(`${process.env.API_URL}/artist/${id}/top?limit=${limit}`)
            .then((response) => {
                res.json(response.data.data);
            })
            .catch((e) => {
                throw new Error(e);
            });
    } catch (e) {
        console.log(e);
    }
};

export const getRelatedArtists = (req: Request, res: Response) => {
    try {
        const { id, limit } = req.params;
        
        axios
            .get(`${process.env.API_URL}/artist/${id}/related?limit=${limit}`)
            .then(response => {
                res.json(response.data.data)
            })
            .catch(e => {
                throw new Error(e)
            })
    } catch (e) {
        console.log(e);
    }
};

export const getArtistAlbums = (req: Request, res: Response) => {
    try {
        const {id} = req.params
        axios
            .get(`${process.env.API_URL}/artist/${id}/albums`)
            .then(response => {
                res.json(response.data.data)
            })
            .catch(e => {
                throw new Error(e)
            })
    }
    catch(e){
        console.log(e)
    }
}