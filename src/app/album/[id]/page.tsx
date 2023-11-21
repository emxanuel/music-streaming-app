'use client'

import Song from '@/components/Song'
import { getAlbumById } from '@/functions/api/album'
import { TAlbum, TSong } from '@/types'
import { emptyAlbum } from '@/utilities/emptyObjects'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { getDurationFormat } from '@/utilities/functions'
import Sidebar from '@/components/Sidebar'
import AppBar from '@/components/AppBar'
import CurrentSong from '@/components/CurrentSong'

const Album = ({ params }: { params: { id: number } }) => {
    const [album, setAlbum] = useState<TAlbum>(emptyAlbum)

    useEffect(() => {
        getAlbumById(params.id, setAlbum)
    }, [params.id])

    return (
        <div className='flex h-screen w-full'>
            <Sidebar />
            <div className='flex flex-col w-full items-center relative mt-[140px]'>
                <div className='flex items-center w-[50rem] justify-around fixed backdrop-blur-sm top-0 z-10'>
                    <Image
                        width={140}
                        height={140}
                        src={album.cover_xl}
                        alt={`${album.title} cover`}
                        className=''
                    />
                    <div className='flex flex-col'>
                        <h1 className='text-4xl'>{album.title}</h1>
                        <p>
                            <span className='text-[#0b7a75] font-semibold'>{album.artist.name}</span> - {album.tracks.data.length} songs - duration: {`${getDurationFormat(album.duration).hours} h, ${getDurationFormat(album.duration).minutes} min`}
                        </p>
                    </div>
                </div>
                <div className='w-full flex justify-center overflow-y-scroll absolute h-full'>
                    <div>
                        {album.id !== 0 ? (
                            album.tracks.data.map((song, index) => (
                                <Song key={index} data={song} />
                            ))

                        ) : (
                            <div></div>
                        )}
                        <div className='h-32 w-full' />
                    </div>
                </div>
                <CurrentSong />
                <AppBar />
            </div>
        </div>
    )
}

export default Album
