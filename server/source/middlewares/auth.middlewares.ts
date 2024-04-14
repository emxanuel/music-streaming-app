import { Request, Response } from "express";
import { verifyUser } from "../models/users";
import { sha256 } from "../functions/main";

const login = async (req: Request, res: Response) => {
    try{
        const data: {username: string, password: string, email: string} = req.body
        if (data.username) {
            const user = await verifyUser(sha256(data.password) , data.username, undefined) 
        if(user){
            res.send(user._id)
        }
        else{
            res.send('user not found')
        }
        }
        if (data.email) {
            const user = await verifyUser(sha256(data.password), undefined, data.email)
            if(user){
                res.send(user._id)
            }
            else{
                res.send('user not found')
            }
        }
    }
    catch(e){
        console.log(e)
    }  
}

export {login}