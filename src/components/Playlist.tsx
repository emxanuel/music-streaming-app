import { TPlaylist } from '@/types'
import React from 'react'
import Link from 'next/link'

interface IProps {
    info: TPlaylist
}

const Playlist: React.FC<IProps> = ({ info }) => {
    return (
        <Link href={`/playlist/${info._id}`} className='flex w-full border-b-small h-10 items-center justify-evenly'>
            <p>{info.name}</p>
            <p>{info.owner.username}</p>
        </Link>
    )
}

export default React.memo(Playlist)