import AlbumItem from '@/components/AlbumItem'
import { TAlbum } from '@/types'
import React from 'react'

interface Props {
    data: TAlbum[],
    artist: string
}

const Albums: React.FC<Props> = ({ data, artist }) => {
    return (
        <div className='md:w-[32rem] w-full flex flex-col items-center h-fit rounded-lg shadow-lg shadow-white/5'>
            <h2 className='text-3xl border-b-[0.5px] border-b-white/5 w-11/12 text-center pb-1'>Albums</h2>
            <ul className='flex flex-col items-center overflow-y-scroll h-[20rem] w-full'>
                {
                    data?.map(album => (
                        <li key={album.id} className='w-full'>
                            <AlbumItem
                                title={album.title}
                                cover={album.cover_medium}
                                artist={artist}
                                id={album.id}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Albums