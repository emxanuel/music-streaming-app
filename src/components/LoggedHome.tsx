import { useUserContext } from '@/contexts/UserContext'
import { getUserPlaylists } from '@/functions/api/playlists'
import { TPlaylist } from '@/types'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { getTimeOfDay } from '@/utilities/functions'
import FavSongs from './FavSongs'
import Playlists from './Playlists'
import FavArtists from './FavArtists'
import BgLoggedHome from './BgLoggedHome'

const LoggedHome = () => {
    const { user } = useUserContext()
    const [playlists, setPlaylists] = useState<TPlaylist[]>([])

    useEffect(() => {
        getUserPlaylists(user._id, setPlaylists)
    }, [user._id])

    return (
        <div className='md:mx-20 mx-2 gap-10 flex flex-col z-'>
            <h1 className='text-3xl mt-5 z-10'>Good {getTimeOfDay(new Date().getHours())}!</h1>
            <section className='z-10'>
                <FavSongs
                    data={user.likedSongs}
                />
            </section>
            <section className='z-10'>
                <h2 className='text-2xl mb-6 z-20'>Your favorite artists</h2>
                <FavArtists
                    data={user.likedArtists}
                />
            </section>
            <section className='z-10'>
                <h2 className='text-2xl mb-6'>Your playlists</h2>
                <Playlists
                    data={playlists}
                />
            </section>
            <section className=''>
                <BgLoggedHome artists={user.likedArtists} />
            </section>
        </div>
    )
}

export default LoggedHome