import { Request, Response } from "express";
import { verifyUser } from "../models/users";
import { sha256 } from "../functions/main";

const login = async (req: Request, res: Response) => {
    try{
        const data: {username: string, password: string} = req.body
        const user = await verifyUser(data.username, sha256(data.password)) 
        if(user){
            res.send(user._id)
        }
        else{
            res.send('user not found')
        }
    }
    catch(e){
        console.log(e)
    }  
}

export {login}