'use client'
import Sidebar from '@/components/Sidebar'
import { getPlaylist } from '@/functions/api/playlists'
import { TPlaylist } from '@/types'
import { emptyPlaylist } from '@/utilities/emptyObjects'
import React, { useEffect, useState } from 'react'

const Playlist = ({ params }: { params: { id: string } }) => {
    const [playlist, setPlaylist] = useState<TPlaylist>(emptyPlaylist)
    console.log(playlist)

    useEffect(() => {
        getPlaylist(params.id, setPlaylist)
    }, [params.id])

    return (
        <div className='flex h-screen w-full '>
            <Sidebar />
            <div className='w-3/4'>
                {playlist._id === ''? (
                    <div></div>
                ) : (
                    <div className='flex flex-col items-center'>
                        <h2 className='text-3xl'>{playlist.name}</h2>
                        <div className='w-full'>
                            {playlist.songs.map((s, index) => (
                                <div key={index} className='flex items-center w-full justify-evenly'>
                                    <p>{s.title}</p>
                                    <p>{s.artist.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Playlist