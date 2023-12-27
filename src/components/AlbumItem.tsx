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
            <p className='w-2/3 truncate flex'>
                {title} - {artist}
            </p>
        </Link>
    )
}

export default AlbumItem