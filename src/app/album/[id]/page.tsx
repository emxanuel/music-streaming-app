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
        <div className='h-full overflow-y-scroll md:overflow-y-auto'>
            {loading ? (
                <SkeletonAlbum />
            ) : (
                <div className='flex flex-col items-center md:h-full md:overflow-hidden md:pt-5'>
                    <div className='flex items-center w-full justify-evenly top-0 z-10 gap-10 relative shadow-current'>
                        <Image
                            width={140}
                            height={140}
                            src={`${album?.cover_xl}`}
                            alt={`${album?.title} cover`}
                            className='z-20 md:w-[140px] w-full'
                        />
                        <div className='flex flex-col md:truncate z-20 md:relative absolute bottom-0 px-2 md:px-0'>
                            <div className='absolute w-full h-52 bg-black blur-[7rem] md:hidden' />
                            <h1 className='text-4xl z-10'>{album?.title}</h1>
                            <p className='z-10'>
                                <span className='text-[#0b7a75] font-semibold'>{album?.artist.name}</span> - {album?.tracks.data.length} songs - duration: {`${getDurationFormat(album?.duration as number).hours} h, ${getDurationFormat(album?.duration as number).minutes} min`}
                            </p>
                        </div>
                        <Image
                            width={140}
                            height={140}
                            src={`${album?.cover_xl}`}
                            alt={`${album?.title} cover`}
                            className='blur-[14rem] w-full absolute h-full -z-10 select-none'
                        />
                    </div>
                    <div className='md:w-2/3 flex flex-col flex-grow md:overflow-y-scroll z-10 w-full'>
                        <div className='flex flex-col md:overflow-y-scroll pb-20'>
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
