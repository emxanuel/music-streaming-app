'use client'

import Song from '@/components/Song'
import { useGetAlbum } from '@/functions/api/album'
import React from 'react'
import Image from 'next/image'
import { getDurationFormat } from '@/utilities/functions'
import { metadata } from '@/app/layout'
import SkeletonAlbum from './Skeleton'

const Album = ({ params }: { params: { id: number } }) => {
    const { album, loading } = useGetAlbum(params.id)
    return (
        <div>
            {loading ? (
                <SkeletonAlbum />
            ) : (
                <div className='flex flex-col items-center h-full overflow-hidden pt-5'>
                    <div className='flex items-center w-full justify-evenly top-0 z-10 gap-10 relative shadow-current'>
                        <Image
                            width={140}
                            height={140}
                            src={`${album?.cover_xl}`}
                            alt={`${album?.title} cover`}
                            className='z-20'
                        />
                        <div className='flex flex-col truncate z-20'>
                            <h1 className='text-4xl'>{album?.title}</h1>
                            <p>
                                <span className='text-[#0b7a75] font-semibold'>{album?.artist.name}</span> - {album?.tracks.data.length} songs - duration: {`${getDurationFormat(album?.duration as number).hours} h, ${getDurationFormat(album?.duration as number).minutes} min`}
                            </p>
                        </div>
                        <Image
                            width={140}
                            height={140}
                            src={`${album?.cover_xl}`}
                            alt={`${album?.title} cover`}
                            className='blur-[14rem] w-full absolute h-full z-10 select-none'
                        />
                    </div>
                    <div className='w-2/3 flex flex-col flex-grow overflow-y-scroll z-0'>
                        <div className='flex flex-col overflow-y-scroll pb-20'>
                            {album?.id !== 0 ? (
                                album?.tracks.data.map((song, index) => (
                                    <Song key={index} data={song} number={index + 1} />
                                ))

                            ) : (
                                <div className=''></div>
                            )}
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Album
