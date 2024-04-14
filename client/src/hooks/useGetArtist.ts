import { getAlbumsByArtist, getArtistById, getRelatedArtist, getSongsByArtist, verifyLikedArtist } from "@/functions/api/artists"
import { TAlbum, TArtist, TSong } from "@/types"
import { emptyArtist } from "@/utilities/emptyObjects"
import { useEffect, useState } from "react"
import { useUserContext } from "@/contexts/UserContext"

export const useGetArtist = (id: number) => {
    const {user} = useUserContext()
    const [loading, setLoading] = useState(true)
    const [artist, setArtist] = useState<TArtist>(emptyArtist)
    const [albums, setAlbums] = useState<TAlbum[]>([])
    const [relatedArtists, setRelatedArtists] = useState<TArtist[]>([])
    const [songs, setSongs] = useState<TSong[]>([])
    const [liked, setLiked] = useState(false)

    useEffect(() => {
        getArtistById(id, setArtist, setLoading)
        getSongsByArtist(id, 5, setSongs)
        getRelatedArtist(id, 10, setRelatedArtists)
        getAlbumsByArtist(id, setAlbums)
    }, [id])

    useEffect(() => {
        setLiked(verifyLikedArtist(user.likedArtists, artist))
    }, [user.likedArtists, artist])

    return {loading, artist, albums, relatedArtists, songs, liked}
}