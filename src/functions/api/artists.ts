import { axiosInstance } from "@/backend";
import { TAlbum, TArtist, TSong, TUser } from "@/types";
import { emptyArtist } from "@/utilities/emptyObjects";
import { useEffect, useState } from "react";

export const getArtistById = (
    id: number,
    setArtist: React.Dispatch<React.SetStateAction<TArtist>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
    setLoading(true);
    axiosInstance
        .get(`/artists/${id}`)
        .then((response) => {
            setArtist(response.data);
        })
        .catch((e) => {
            console.log(e);
        })
        .finally(() => setLoading(false));
};

export const getSongsByArtist = (
    id: number,
    limit: number,
    setSongs: React.Dispatch<React.SetStateAction<TSong[]>>,
) => {
    axiosInstance
        .get(`/artists/${id}/${limit}/songs`)
        .then((response) => {
            setSongs(response.data);
        })
        .catch((e) => {
            console.log(e);
        })
};

export const getAlbumsByArtist = (
    id: number,
    setAlbums: React.Dispatch<React.SetStateAction<TAlbum[]>>,
) => {
    axiosInstance
        .get(`/artists/${id}/albums`)
        .then((response) => {
            setAlbums(response.data);
        })
        .catch((e) => {
            console.log(e);
        })
};

export const getRelatedArtist = (
    id: number,
    limit: number,
    setArtists: React.Dispatch<React.SetStateAction<TArtist[]>>,
) => {
    axiosInstance
        .get(`/artists/${id}/${limit}/related`)
        .then((response) => {
            setArtists(response.data);
        })
        .catch((e) => {
            console.log(e);
        })
};

export const likeArtist = (
    id: string,
    artist: TArtist,
    setUser: (user: TUser) => void,
) => {
    
    axiosInstance
        .put(`/artists/user/${id}/like`, {
            artist: artist
        })
        .then((response) => {
            setUser(response.data);
        })
        .catch((e) => {
            console.log(e);
        })
}

export const unlikeArtist = (
    id: string,
    artist: TArtist,
    setUser: (user: TUser) => void,
) => {
    axiosInstance
        .put(`/artists/user/${id}/unlike`, {
            artist: artist
        })
        .then((response) => {
            setUser(response.data);
        })
        .catch((e) => {
            console.log(e);
        })
}   

export const verifyLikedArtist = (
    likedArtists: TArtist[],
    artist: TArtist,
) => {
    console.log(likedArtists)
    if (likeArtist.length > 0){
        const liked = likedArtists.some((likedArtist) => likedArtist.id === artist.id);
        return liked;
    }
    else{
        return false;
    }

}