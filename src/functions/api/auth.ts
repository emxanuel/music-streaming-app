import { axiosInstance } from "@/backend";
import { getUserById } from "./users";
import React from "react";
import { TUser } from "@/types";
import { AxiosError } from "axios";

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
            alert(request.status)
            return false
        }
    } catch (e) {
        alert((e as AxiosError).config?.url);
        return false
    }
};

export { login };
