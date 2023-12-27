import React from 'react'
import Image from 'next/image'
import { TSong } from '@/types'

interface Props{
    data: TSong[]
}

const FavSongs: React.FC<Props> = ({data}) => {
    return (
        <div className='grid grid-cols-2 gap-3 w-full place-items-stretch'>
            {
                data?.slice(0, 6).map((song, index) => (
                    <button key={index} className='flex gap-4 md:w-full w-full items-center bg-neutral-800 rounded-md hover:bg-neutral-700 duration-200'>
                        <div>
                            <Image
                                src={song.album.cover_small}
                                alt={song.title}
                                width={50}
                                height={50} />
                        </div>
                        <div>
                            <p>{song.title}</p>
                        </div>
                    </button>
                ))
            }
        </div>
    )
}

export default FavSongs
