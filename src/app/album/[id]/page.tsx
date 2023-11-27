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
import Layout from '@/components/Layout'

const Album = ({ params }: { params: { id: number } }) => {
    const [album, setAlbum] = useState<TAlbum>(emptyAlbum)

    useEffect(() => {
        getAlbumById(params.id, setAlbum)
    }, [params.id])

    return (
        <Layout>
            <div className='flex flex-col items-center h-full overflow-hidden'>
                <div className='flex items-center w-full justify-evenly top-0 z-10 gap-10 relative shadow-current'>
                    <Image
                        width={140}
                        height={140}
                        src={album.cover_xl}
                        alt={`${album.title} cover`}
                        className='z-20'
                    />
                    <div className='flex flex-col truncate z-20'>
                        <h1 className='text-4xl'>{album.title}</h1>
                        <p>
                            <span className='text-[#0b7a75] font-semibold'>{album.artist.name}</span> - {album.tracks.data.length} songs - duration: {`${getDurationFormat(album.duration).hours} h, ${getDurationFormat(album.duration).minutes} min`}
                        </p>
                    </div>
                    <Image
                        width={140}
                        height={140}
                        src={album.cover_xl}
                        alt={`${album.title} cover`}
                        className='blur-[14rem] w-full absolute h-full z-10 select-none'
                    />
                </div>
                <div className='w-2/3 flex flex-col flex-grow overflow-y-scroll z-0'>
                    <div className='flex flex-col overflow-y-scroll pb-20'>
                        {album.id !== 0 ? (
                            album.tracks.data.map((song, index) => (
                                <Song key={index} data={song} number={index + 1} />
                            ))

                        ) : (
                            <div className=''></div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Album
