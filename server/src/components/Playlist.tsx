import { TPlaylist } from '@/types'
import React from 'react'
import Link from 'next/link'

interface IProps {
    info: TPlaylist
}

const Playlist: React.FC<IProps> = ({ info }) => {
    return (
        <Link href={`/playlist/${info._id}`} className='grid grid-cols-2 place-items-center w-full hover:bg-white/20 duration-200 py-1 items-center justify-evenly'>
            <p>{info.name}</p>
            <p>{info.owner.username}</p>
        </Link>
    )
}

export default React.memo(Playlist)