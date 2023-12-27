import { TArtist } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props{
    data: TArtist[]
}

const FavArtists: React.FC<Props> = ({data}) => {
    return (
        <div className='flex w-full overflow-x-scroll gap-5 scroll no-navbar'>
            {
                data?.map((artist, index) => (
                    <Link href={`/artist/${artist.id}`} key={index} className='flex-shrink-0 flex-grow-0'>
                        <Image 
                            src={artist.picture_medium}
                            alt={artist.name}
                            width={150}
                            height={150}
                            className='rounded-full z-20 relative w-32 md:w-[150px]'
                        />
                    </Link>
                ))
            }
        </div>
    )
}

export default FavArtists
