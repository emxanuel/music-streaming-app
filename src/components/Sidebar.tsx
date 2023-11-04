'use client'
import { useUserContext } from '@/contexts/UserContext'
import { getUserPlaylists } from '@/functions/api/playlists'
import { TPlaylist } from '@/types'
import React, { useEffect, useState } from 'react'
import Playlist from './Playlist'

const Sidebar = () => {
    const { user } = useUserContext()
    const [playlists, setPlaylists] = useState<TPlaylist[]>([])
    useEffect(() => {
        getUserPlaylists(user._id, setPlaylists)
    }, [user._id])

    return (
        <div className='w-1/4 border-r-small h-full flex flex-col'>
            <div className='border-b-small p-5 flex justify-start'>
                {user.username}
            </div>
            <div className='flex flex-col items-center overflow-y-scroll'>
                <h2 className='text-lg border-b-small w-full text-center py-2'>Playlists</h2>
                {playlists.length !== 0? playlists.map((p, index) => (
                    <Playlist info={p} key={index}></Playlist>
                )) : (
                    <div></div>
                )}
            </div>
        </div>
    )
}

export default React.memo(Sidebar)