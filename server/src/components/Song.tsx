import { TSong } from '@/types'
import React, { useEffect, useState } from 'react'
import { Button, ModalContent } from '@nextui-org/react'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Modal } from '@nextui-org/react'
import SongActions from './SongActions'
import { useAudioContext } from '@/contexts/SongContext'
import { Howl } from 'howler'
import { useUserContext } from '@/contexts/UserContext'
import { addFavoriteSong, getUserById, deleteFavoriteSong } from '@/functions/api/users'

interface IProps {
    data: TSong,
    number?: number
}

const Song: React.FC<IProps> = ({ data, number }) => {
    const { user, setUser } = useUserContext()
    const [openModal, setOpenModal] = useState(false)
    const { song, setSong: setAudio } = useAudioContext()
    const [liked, setLiked] = useState(false)

    useEffect(() => {
        setLiked(user.likedSongs?.some(song => song.id === data.id))
    }, [data.id, user.likedSongs])

    const playSong = () => {
        song.audio.pause(song.id)
        setAudio({ info: data, audio: new Howl({ src: [data.preview], format: 'mp3', html5: true }) })
    }

    const likeSong = () => {
        switch (liked) {
            case true:
                deleteFavoriteSong(user._id, data).
                    then((u) => {
                        setUser(u)
                    })
                break
            case false:
                addFavoriteSong(user._id, data)
                    .then((u) => {
                        setUser(u)
                    })
                break
        }
    }

    useEffect(() => {
        song.id = song.audio.play(song.id)
    }, [song, song.audio])


    return (
        <div className='bg-transparent h-max' onClick={playSong} >
            <div className='h-28 w-full flex justify-around  items-center py-5 bg-transparent duration-200 hover:cursor-pointer hover:bg-neutral-900/70 px-3'>
                {!number ? (
                    <Image src={data.album.cover_medium}
                        alt='song-image'
                        width={70}
                        height={70}
                        className='w-[50px] md:w-[70px] aspect-square'
                    />
                ) : (
                    <p>{number}</p>
                )}
                <p className='w-2/3 truncate text-center px-5'>
                    {data.title} - {data.artist.name}
                </p>
                <div className='flex'>
                    <Button size='sm' className='bg-transparent' onClick={likeSong}>
                        <Icon fontSize={'20px'} icon={liked ? 'ph:heart-fill' : 'ph:heart'} />
                    </Button>
                    <Button size='sm' className='bg-transparent' onClick={() => setOpenModal(true)}>
                        <Icon fontSize={'20px'} icon="material-symbols:more-vert" />
                    </Button>
                    <Modal
                        isOpen={openModal}
                        onClose={() => setOpenModal(false)}
                        className='flex flex-col items-center py-5 absolute'
                        size='sm'
                    >
                        <ModalContent>
                            <SongActions song={data} />
                        </ModalContent>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Song