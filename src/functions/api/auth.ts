import { axiosInstance } from "@/backend";
import { getUserById } from "./users";
import React from "react";
import { TUser } from "@/types";

const login = async (
    username: string,
    password: string,
    setUser: (user: TUser) => void
) => {
    try {
        const request = await axiosInstance.post("/auth/login", {
            username: username,
            password: password,
        });

        if (request.status === 200) {
            if (request.data !== 'user not found'){
                const user = await getUserById(request.data)
                setUser(user)
                return true
            }
        }
        else{
            return false
        }
    } catch (e) {
        console.log(e);
        return false
    }
};

export { login };
