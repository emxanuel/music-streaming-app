import { axiosInstance } from "@/backend";
import { TAlbum } from "@/types";
import React from "react";

const getAlbumById = (
    id: number,
    setAlbum: React.Dispatch<React.SetStateAction<TAlbum>>
) => {
    axiosInstance.get('/album', {
        params: {
            id
        }
    })
    .then((response) => setAlbum(response.data))
    .catch(e => console.log(e))
}

export {
    getAlbumById
}