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
    return (
        <Link href={`/album/${id}`} className='h-28 w-full flex justify-around items-center py-5 bg-transparent duration-200 hover:cursor-pointer hover:bg-neutral-900/70'>
            <div>
                <Image 
                    src={cover} alt='album cover'
                    width={70}
                    height={70}
                />
            </div>
            <div className='w-96 truncate flex'>
                <p>
                    <span>{title} - {artist}</span>
                </p>
            </div>
        </Link>
    )
}

export default AlbumItem