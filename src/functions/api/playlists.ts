import { axiosInstance } from "@/backend";
import { TPlaylist } from "@/types";
import React from "react";

const getUserPlaylists = async (
    id: string,
    setPlaylists: React.Dispatch<React.SetStateAction<TPlaylist[]>>
) => {
    try {
        const request = await axiosInstance.get(`/playlists/user/${id}`);

        if (request.status === 200) {
            setPlaylists(request.data);
        }
        else{
            throw new Error('request failed')
        }
    } catch (e) {
        console.log(e);
    }
};

const getPlaylist = async (id: string, setPlaylist : React.Dispatch<React.SetStateAction<TPlaylist>>) => {
    try{
        const request = await axiosInstance.get(`/playlists/${id}`)

        if (request.status === 200){
            setPlaylist(request.data)
        }
        else{
            throw new Error('request failed')
        }
    }
    catch(e){
        console.error(e)
    }
}

export { getUserPlaylists, getPlaylist };
