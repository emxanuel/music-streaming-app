import { axiosInstance } from "@/backend";
import { TAlbum, TArtist, TSong } from "@/types";

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
