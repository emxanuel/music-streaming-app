'use client'

import { useAudioContext } from '@/contexts/SongContext'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Button } from '@nextui-org/react'

const CurrentSong = () => {
    const { song } = useAudioContext()
    const [play, setPlay] = useState(false)

    useEffect(() => {
        if (song.info.title && !song.audio.playing(song.id)) {
            if (play) {
                song.audio.play(song.id)
            }
        }
        if (!play){
            song.audio.pause(song.id)
        }
    }, [play, song])

    return (
        song.info.title === '' ? (
            <div></div>
        ) : (
            <div className='absolute duration-300 bottom-[82px] w-[98%] left-0 bg-black/90 backdrop-blur-sm flex shadow-lg shadow-[#0b7a75]/20 justify-evenly items-center z-20'>
                <Image
                    src={song.info.album.cover_medium}
                    width={60}
                    height={60}
                    alt='song image'
                />
                <p className=''>
                    <span>{song.info.title}</span> - <span>{song.info.artist.name}</span>
                </p>
                <Button className='bg-black' onClick={() => setPlay(prev => !prev)}>
                    <Icon fontSize={'24px'} icon="ph:play-pause-fill" />
                </Button>
            </div>
        )
    )
}

export default CurrentSong