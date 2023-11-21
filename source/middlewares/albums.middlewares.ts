import axios from "axios";
import { Request, Response } from "express";

const getAlbumById = async (req: Request, res: Response) => {
    try {
        const { id } = req.query;
        const request = await axios.get(`${process.env.API_URL}/album/${id}`);

        if (request.status === 200){
            res.json(request.data)
        }
        else{
            throw 'request failed'
        }
    } catch (e) {
        console.log(e);
        res.sendStatus(500).json(e);
    }
};

export { getAlbumById };
