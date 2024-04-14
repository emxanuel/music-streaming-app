import { axiosInstance } from "@/backend";
import { getUserById } from "./users";
import React from "react";
import { TUser } from "@/types";
import { AxiosError } from "axios";

const login = async (
    password: string,
    setUser: (user: TUser) => void,
    username?: string
) => {
    try {
        const regexEmail =
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

        if (regexEmail.test(username as string)) {
            const request = await axiosInstance.post("/auth/login", {
                email: username,
                password: password,
            });
            if (request.status === 200) {
                if (request.data !== "user not found") {
                    const user = await getUserById(request.data);
                    setUser(user);
                    return true;
                }
            } else {
                alert(request.status);
                return false;
            }
        }
        else{
            const request = await axiosInstance.post("/auth/login", {
                username: username,
                password: password,
            });
            if (request.status === 200) {
                if (request.data !== "user not found") {
                    const user = await getUserById(request.data);
                    setUser(user);
                    return true;
                }
            } else {
                alert(request.status);
                return false;
            }
        }
        
    } catch (e) {
        alert((e as AxiosError).config?.url);
        return false;
    }
};

export { login };
