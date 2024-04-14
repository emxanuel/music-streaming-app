import { TArtist } from '@/types'
import React from 'react'
import Image from 'next/image'

interface Props {
    artists: TArtist[]
}

const BgLoggedHome: React.FC<Props> = ({ artists }) => {
    return (
        <div className='flex overflow-x-scroll justify-center scroll no-navbar absolute top-0 gap-10 w-screen md:-ml-[12rem] -ml-2'>
            {
                artists.slice(0, 5).map((artist, index) => (
                    <article key={index} className='flex-shrink-0 flex-grow-0 top-0'>
                        <Image
                            src={artist.picture_medium}
                            alt={artist.name}
                            width={100}
                            height={150}
                            className=' select-none blur-[15rem] h-screen'
                        />
                    </article>
                ))
            }
        </div>
    )
}

export default BgLoggedHome