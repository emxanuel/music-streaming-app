import { TArtist } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    data: TArtist[]
}

const RelatedArtists: React.FC<Props> = ({ data }) => {
    return (
        <div className='flex flex-col px-2 w-full'>
            <div className='flex flex-col w-full gap-5'>
                <h2 className='text-4xl'>Similar Artists</h2>
                <div className='flex w-full overflow-x-scroll gap-5'>
                    {data.map((artist) => (
                        <Link className='flex flex-col items-center relative flex-grow-0 flex-shrink-0 gap-5' href={`/artist/${artist.id}`} key={artist.id}>

                            <Image
                                height={140}
                                width={140}
                                alt={artist.name}
                                src={artist.picture_xl}
                                className='rounded-full'
                                style={{
                                    viewTransitionName: `image-artist-${artist.id}`
                                }}
                            />
                            <h3 className='text-xl'>{artist.name}</h3>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default RelatedArtists