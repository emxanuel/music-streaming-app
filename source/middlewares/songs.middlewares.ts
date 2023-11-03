import { Request, Response } from "express";
import axios from "axios";
import { ISong } from "../types";

const getSongs = async (req: Request, res: Response) => {
    try{
        if (req.query.artist){
            const request = await axios.request({
                method: 'GET',
                url: `${process.env.API_URL}/search/artist`,
                params: {
                    q: `${req.query.artist}`,
                },
            })
            if (request.status === 200){
                res.json(request.data.data)
            }
        }

        

    }
    catch(e){
        console.error(e)
        res.sendStatus(500).json(e)
    }
}

export {
    getSongs
}