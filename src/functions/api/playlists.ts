import { axiosInstance } from "@/backend";
import { TPlaylist, TSong } from "@/types";
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

const updatePlaylist = async (id: string, songs: TSong[]) => {
    try{
        await axiosInstance.put(`/playlists/${id}`, {
            songs: songs
        })
    }
    catch(e){
        console.log(e)
    }
}

const createPlaylist = async (playlist: TPlaylist) => {
    try{
        delete playlist._id
        await axiosInstance.post('/playlists', {
            ...playlist 
        })
    }
    catch(e){
        console.log(e)
    }
}

export { getUserPlaylists, getPlaylist, updatePlaylist, createPlaylist };
