'use client'
import Layout from '@/components/Layout'
import { getAlbumsByArtist, getArtistById, getRelatedArtist, getSongsByArtist, useGetArtist } from '@/functions/api/artists'
import { TAlbum, TArtist, TSong } from '@/types'
import { emptyArtist } from '@/utilities/emptyObjects'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import TopSongs from './TopSongs'
import Albums from './Albums'
import RelatedArtists from './RelatedArtists'
import SkeletonArtist from './Skeleton'

const Artist = ({ params }: { params: { id: number } }) => {

    const {loading, artist, albums, relatedArtists, songs} = useGetArtist(params.id)

    return (
        <Layout>
            <div className='h-full overflow-y-scroll pb-20'>
                {loading ? (
                    <SkeletonArtist />
                ) : (
                    <div className='flex flex-col overflow-y-scroll relative h-full gap-10 pt-5'>
                        <header className='flex justify-center items-center gap-20'>
                            <Image
                                width={140}
                                height={140}
                                alt={artist.name}
                                src={artist.picture_big}
                                className='z-10'
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
                            <h1 className='text-5xl z-10'>{artist.name}</h1>
                        </header>
                        <section className='flex h-full z-10 gap-5 px-2'>
                            <TopSongs data={songs} />
                            <Albums data={albums} artist={artist.name} />
                        </section>
                        <section className='w-full flex items-start justify-start'>
                            <RelatedArtists data={relatedArtists} />
                        </section>
                    </div>
                )}
            </div>
        </Layout>
    )
}

export default Artist