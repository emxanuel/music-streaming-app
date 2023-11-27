import { TArtist } from '@/types'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props{
    name: string,
    image: string,
    id: number
}

const ArtistItem: React.FC<Props> = ({name, image, id}) => {
    return (
        <Link href={`/artist/${id}`} className='h-28 w-full flex justify-around place-items-center items-center py-5 bg-black duration-200 hover:cursor-pointer hover:bg-neutral-900'>
            <Image 
                src={image}
                width={70}
                height={70}
                alt={name}
            />
            <p className='w-2/3 truncate flex items-center justify-center'>{name}</p>
        </Link>
    )
}

export default ArtistItem