import { axiosInstance } from "@/backend";
import { TAlbum, TArtist, TSong } from "@/types";
import { AxiosResponse } from "axios";

const searchSong = async (
    value: string,
    setResults: React.Dispatch<React.SetStateAction<TSong[]>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    controller: AbortController
) => {
    setLoading(true);
    axiosInstance
        .get("/songs", {
            params: {
                song: value,
            },
            signal: controller.signal
        })
        .then((response) => {
            setResults(response.data);
        })
        .catch((e) => {
            console.log(e);
        })
        .finally(() => {
            setLoading(false);
        });
    
};

const searchAlbum = (
    value: string,
    setResults: React.Dispatch<React.SetStateAction<TAlbum[]>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    controller: AbortController

) => {
    setLoading(true)
    axiosInstance
        .get('songs', {
            params: {
                album: value
            },
            signal: controller.signal
        })
        .then(response => {
            setResults(response.data)
        })
        .catch(e => {
            console.log(e)
        })
        .finally(() => {
            setLoading(false)
        })
}

const searchArtist = (
    value: string,
    setResults: React.Dispatch<React.SetStateAction<TArtist[]>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    controller: AbortController
) => {
    setLoading(true)
    axiosInstance
        .get('songs', {
            params: {
                artist: value
            },
            signal: controller.signal
        })
        .then(response => {
            setResults(response.data)
        })
        .catch(e => {
            console.log(e)
        })
        .finally(() => {
            setLoading(false)
        })
}

export { searchSong, searchAlbum, searchArtist };
