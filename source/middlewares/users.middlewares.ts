    import { Request, Response } from "express";
import {
    addUser,
    deleteUserById,
    getUserByEmail,
    getUserById,
    getUsers,
    updateUserById,
} from "../models/users";
import { IUser } from "../types";
import { sha256 } from "../functions/main";

const getAllUsers = async (_: Request, res: Response) => {
    try {
        const users = await getUsers();
        res.json(users);
    } catch (e) {
        res.sendStatus(400).json(e);
    }
};

const getSingleUser = async (req: Request, res: Response) => {
    try {
        let user: IUser | null = null;
        if (req.query.id) {
            try {
                user = (await getUserById(
                    req.query.id.toString()
                )) as IUser;
            } catch {
                res.sendStatus(500).json({ message: "Incorrect value" });
            }
        } else if (req.query.email) {
            user = (await getUserByEmail(req.query.email.toString())) as IUser;
        }

        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (e) {
        console.error(e);
        res.sendStatus(500).json(e);
    }
};

const createUser = async (req: Request, res: Response) => {
    try {
        const {user} = req.body;
        user.password = sha256(user.password)
        const addedUser = await addUser(user);
        res.json(addedUser);
    } catch (e: any) {
        console.log(e.code)
        res.send(e);
    }
};

const updateUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const { username } = req.body;

        const user = await getUserById(id) as IUser;

        user.username = username
        const updatedUser = await updateUserById(id, user)
        res.json(updatedUser)
    } catch (e) {
        console.error(e);
        res.sendStatus(500).json(e);
    }
};

const deleteUser = async (req: Request, res: Response) => {
    try{
        const id = req.params.id
        const deletedUser = await deleteUserById(id)

        res.json(deleteUser)
    }
    catch(e){
        console.error(e)
        res.sendStatus(500).json(e)
    }
}

export { 
    getAllUsers, 
    getSingleUser, 
    createUser, 
    updateUser,
    deleteUser
};
