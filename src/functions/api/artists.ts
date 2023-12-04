import { axiosInstance } from "@/backend";
import { TAlbum, TArtist, TSong } from "@/types";
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

export const useGetArtist = (id: number) => {
    const [loading, setLoading] = useState(true)
    const [artist, setArtist] = useState<TArtist>(emptyArtist)
    const [albums, setAlbums] = useState<TAlbum[]>([])
    const [relatedArtists, setRelatedArtists] = useState<TArtist[]>([])
    const [songs, setSongs] = useState<TSong[]>([])

    useEffect(() => {
        getArtistById(id, setArtist, setLoading)
        getSongsByArtist(id, 5, setSongs)
        getRelatedArtist(id, 10, setRelatedArtists)
        getAlbumsByArtist(id, setAlbums)
    }, [id])

    return {loading, artist, albums, relatedArtists, songs}
}