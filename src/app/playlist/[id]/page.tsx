'use client'
import AppBar from '@/components/AppBar'
import Sidebar from '@/components/Sidebar'
import { getPlaylist } from '@/functions/api/playlists'
import { TPlaylist } from '@/types'
import { emptyPlaylist } from '@/utilities/emptyObjects'
import React, { useEffect, useState } from 'react'
import Song from '../../../components/Song'
import CurrentSong from '@/components/CurrentSong'
import Layout from '@/components/Layout'

const Playlist = ({ params }: { params: { id: string } }) => {
    const [playlist, setPlaylist] = useState<TPlaylist>(emptyPlaylist)

    useEffect(() => {
        getPlaylist(params.id, setPlaylist)
    }, [params.id])

    return (
        <Layout>
            {playlist._id === '' ? (
                <div></div>
            ) : (
                <div className='h-full flex flex-col items-center overflow-y-scroll'>
                    <div className='flex flex-col w-full h-20 py-16 items-center justify-center blueGradient'>
                        <h2 className='text-3xl'>{playlist.name}</h2>
                    </div>
                    <div className='w-full overflow-y-scroll'>
                        {playlist.songs.map((s, index) => (
                            <Song key={index} data={s} />
                        ))}
                        <div className='h-32 w-full' />
                    </div>
                </div>
            )}
        </Layout>
    )
}

export default Playlist