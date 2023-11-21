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
        if (req.query.album){
            const request = await axios.request({
                method: 'GET',
                url: `${process.env.API_URL}/search/album`,
                params: {
                    q: req.query.album
                }
            })
            
            if (request.status === 200){
                res.json(request.data.data)
            }
        }
        if (req.query.song){
            const request = await axios.request({
                method: 'GET',
                url: `${process.env.API_URL}/search`,
                params: {
                    q: req.query.song
                }
            })

            if (request.status === 200){
                res.json(request.data.data)
            }
            else{
                throw 'request failed'
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