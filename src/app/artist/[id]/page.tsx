'use client'
import { useGetArtist } from '@/hooks/useGetArtist'
import Image from 'next/image'
import React from 'react'
import TopSongs from './TopSongs'
import Albums from './Albums'
import RelatedArtists from './RelatedArtists'
import SkeletonArtist from './Skeleton'
import { Button } from '@nextui-org/react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { likeArtist, unlikeArtist } from '@/functions/api/artists'
import { useUserContext } from '@/contexts/UserContext'

const Artist = ({ params }: { params: { id: number } }) => {
    const { user, setUser } = useUserContext()
    const { loading, artist, albums, relatedArtists, songs, liked } = useGetArtist(params.id)

    return (
        <div className='h-full overflow-y-scroll pb-20'>
            {loading ? (
                <SkeletonArtist />
            ) : (
                <div className='flex flex-col overflow-y-scroll relative h-full gap-10 md:pt-5'>
                    <header className='flex justify-center items-center md:gap-20 gap-7 relative'>
                        <Image
                            width={140}
                            height={140}
                            alt={artist.name}
                            src={artist.picture_big}
                            className='z-10 w-full md:w-[140px]'
                        />
                        <Image
                            width={140}
                            height={140}
                            src={artist.picture_big}
                            alt={`${artist.name} cover`}
                            className='blur-[18rem] w-full absolute h-[50%] select-none'
                            style={{
                                viewTransitionName: `image-artist-${artist.id}`
                            }}
                        />
                        <div className='flex md:flex-col md:items-start items-center absolute md:relative h-fit w-full md:w-fit bottom-0 z-10 px-2 md:px-0'>
                            <div className='absolute w-full h-52 bg-black blur-[7rem] md:hidden'/>
                            <h1 className='text-6xl w-full md:text-5xl z-10 mb-5'>{artist.name}</h1>
                            {
                                liked ? (
                                    <Button onClick={() => {
                                        unlikeArtist(user._id, artist, setUser)
                                    }} className='duration-100'>
                                        Following
                                    </Button>
                                ) : (
                                    <Button onClick={() => {
                                        likeArtist(user._id, artist, setUser)
                                    }} className='bg-[#0b7a75] duration-100'>
                                        + Follow
                                    </Button>
                                )
                            }
                        </div>

                    </header>
                    <section className='flex md:h-full z-10 px-2 justify-around flex-col md:flex-row gap-20 md:gap-0'>
                        <TopSongs data={songs} />
                        <Albums data={albums} artist={artist.name} />
                    </section>
                    <section className='w-full flex items-start justify-start'>
                        <RelatedArtists data={relatedArtists} />
                    </section>
                </div>
            )}
        </div>
    )
}

export default Artist