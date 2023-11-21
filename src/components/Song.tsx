import { TSong } from '@/types'
import React, { useEffect, useState } from 'react'
import { Button, ModalContent } from '@nextui-org/react'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Modal } from '@nextui-org/react'
import SongActions from './SongActions'
import { useAudioContext } from '@/contexts/SongContext'
import { Howl } from 'howler'

interface IProps {
    data: TSong
}

const Song: React.FC<IProps> = ({ data }) => {
    const [openModal, setOpenModal] = useState(false)
    const { song, setSong: setAudio } = useAudioContext()
    const songTitle = `${data.title} - ${data.artist.name}`.length <= 30 ?
        `${data.title} - ${data.artist.name}` :
        `${data.title} - ${data.artist.name}`.slice(0, 26).concat('...')
    const playSong = () => {
        song.audio.pause(song.id)
        setAudio({ info: data, audio: new Howl({ src: [data.preview], format: 'mp3', html5: true }) })
    }

    useEffect(() => {
        song.id = song.audio.play(song.id)
        console.log(song.id)
    }, [song, song.audio])


    return (
        <Button fullWidth className='bg-black h-max' onClick={playSong} >
            <div className='h-28 w-full flex justify-around items-center py-5 bg-black duration-200 hover:cursor-pointer hover:bg-neutral-900'>
                <Image src={data.album.cover_medium}
                    alt='song-image'
                    width={70}
                    height={70}
                    className='w-[60px] md:w-[70px] aspect-square'
                />
                <p className='w-2/3'>
                    <span>{songTitle}</span>
                </p>
                <div>
                    <Button size='sm' className='bg-transparent' onClick={() => setOpenModal(true)}>
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
        </Button>
    )
}

export default Song