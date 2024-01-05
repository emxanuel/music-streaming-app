import { axiosInstance } from "@/backend";
import type { TSong, TUser } from "@/types";
import { emptyUser } from "@/utilities/emptyObjects";

export const getUserById = async (id: string) => {
    let user: TUser = emptyUser;
    try {
        const request = await axiosInstance.get(`/users/find?id=${id}`);

        if (request.status === 200) {
            user = request.data;
            return user;
        }
    } catch (e) {
        console.log(e);
        return user;
    }

    return user;
};

export const addUser = async (
    form: {
        firstName: string;
        lastName: string;
        username?: string;
        email: string;
        password: string;
    },
    setMessage?: React.Dispatch<
        React.SetStateAction<{ text: string; style: string }>
    >
) => {
    const regexEmail =
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (regexEmail.test(form.email)) {
        setMessage && setMessage({
            text: "",
            style: "text-white",
        });
        if (form.password.length < 8) {
            setMessage && setMessage({
                text: "Password must contain at least 8 characters",
                style: "text-red-500",
            });
            return;
        }
    } 
    else if(form.email === "") {
        return
    }
    else {
        setMessage && setMessage({
            text: "Insert a valid email",
            style: "text-red-500",
        });
        return;
    }
    const request = await axiosInstance.post("/users", {
        user: form,
    });
    try{
        if (request.status === 200) {
            if (request.data.code === 11000){
                if (request.data.keyValue.hasOwnProperty('username')){
                    throw `It's already an acount with the username ${request.data.keyValue.username}`
                }
                else if(request.data.keyValue.hasOwnProperty('email')){
                    throw `It's already an acount with the email ${request.data.keyValue.email}`
                }
            }
            setMessage && setMessage((prev) => ({
                ...prev,
                text: "Register succesfull, go to login",
            }));
        }
        else{
            console.log(request.data)
        }
    }
    catch(e: any){
        setMessage && setMessage(({
            style: 'text-red-500 text-center',
            text: e
        }))
    }

};

export const addFavoriteSong = async (id: string, song: TSong) => {
    let user: TUser = emptyUser;
    const request = await axiosInstance.post(`/songs/user/${id}/liked`, {
        song,
    });

    if (request.status === 200) {
        user = request.data;
    }
    return user;
};

export const deleteFavoriteSong = async (id: string, song: TSong) => {
    let user: TUser = emptyUser;
    const request = await axiosInstance.put(`/songs/user/${id}/liked`, {
        song,
    });

    if (request.status === 200) {
        user = request.data;
    }
    return user;
};
