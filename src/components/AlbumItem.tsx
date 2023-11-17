import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface IProps {
    title: string,
    artist: string,
    cover: string,
    id: number
}

const AlbumItem: React.FC<IProps> = ({ title, artist, cover, id }) => {
    console.log(title)
    return (
        <Link href={`/album/${id}`} className='flex justify-around'>
            <div>
                <Image 
                    src={cover} alt='album cover'
                    width={70}
                    height={70}
                />
            </div>
            <div className='w-96 text-ellipsis whitespace-nowrap overflow-hidden flex items-center justify-center'>
                <p>{title} - {artist}</p>
            </div>
        </Link>
    )
}

export default AlbumItem