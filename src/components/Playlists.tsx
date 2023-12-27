import { TPlaylist } from '@/types'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PlaylistCover from './PlaylistCover'

interface Props {
    data: TPlaylist[]
}

const Playlists: React.FC<Props> = ({ data }) => {
    return (
        <section className='flex gap-5 w-full overflow-x-scroll no-navbar'>
            {
                data?.map((playlist, index) => (
                    playlist.songs[0] ? (
                        <Link href={`/playlist/${playlist._id}`} className='flex-shrink-0 flex-grow-0 relative overflow-hidden' key={index}>
                            <Image
                                src={playlist.songs[0]?.album.cover_xl}
                                alt='playlist cover'
                                width={170}
                                height={170}
                                className='w-32 md:w-[170px]'
                            />
                            <p className='absolute bottom-0 w-full text-center z-20'>{playlist.name}</p>
                            <PlaylistCover 
                                color={Math.floor(Math.random() * 3)}
                                shape={Math.floor(Math.random() * 2)}
                            />
                        </Link>
                    ) : (
                        <div key={index}></div>
                    )

                ))
            }
        </section>
    )
}

export default Playlists
