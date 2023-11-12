import { TSong } from '@/types'
import React, { useEffect, useState } from 'react'
import { Button, ModalContent } from '@nextui-org/react'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Modal } from '@nextui-org/react'
import SongActions from './SongActions'
import { useAudioContext } from '@/contexts/SongContext'
import {Howl} from 'howler'

interface IProps {
    data: TSong
}

const Song: React.FC<IProps> = ({ data }) => {
    const [openModal, setOpenModal] = useState(false)
    const { song, setSong: setAudio } = useAudioContext()
    const playSong = () => {
        song.audio.pause(song.id)
        setAudio({info: data, audio: new Howl({src: [data.preview], format: 'mp3', html5: true})})
    }

    useEffect(() => {
        song.id = song.audio.play(song.id)
        console.log(song.id)
    }, [song, song.audio])

    
    return (
        <div className='flex justify-around items-center py-5' onClick={playSong} >
            <Image src={data.album.cover_medium}
                alt='song-image'
                width={70}
                height={70}
            />
            <p className='w-2/3'>
                <span>{data.title}</span> - <span>{data.artist.name}</span>
            </p>
            <div>
                <Button size='sm' className='bg-black' onClick={() => setOpenModal(true)}>
                    <Icon fontSize={'20px'} icon="material-symbols:more-vert" />
                </Button>
                <Modal
                    isOpen={openModal}
                    onClose={() => setOpenModal(false)}
                    className='flex flex-col items-center py-5'
                    size='sm'
                >
                    <ModalContent>
                        <SongActions song={data} />
                    </ModalContent>
                </Modal>
            </div>
        </div>
    )
}

export default Song