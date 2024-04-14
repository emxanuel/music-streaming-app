import { useUserContext } from '@/contexts/UserContext'
import { getUserPlaylists, updatePlaylist } from '@/functions/api/playlists'
import { TPlaylist, TSong } from '@/types'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Button, Modal, ModalContent, Popover, PopoverContent } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

interface IProps {
    song: TSong
}

const SongActions: React.FC<IProps> = ({ song }) => {
    const { user } = useUserContext()
    const [playlists, setPlaylists] = useState<TPlaylist[]>([])
    const [openPlaylists, setOpenPlaylists] = useState(false)
    const [openAlert, setOpenAlert] = useState(false)

    useEffect(() => {
        getUserPlaylists(user._id, setPlaylists)
    }, [user._id])

    return (
        <div>
            <Button onClick={() => setOpenPlaylists(true)}>Add to playlist</Button>
            <Modal
                isOpen={openPlaylists}
                onClose={() => setOpenPlaylists(false)}
                size='md'
                className='py-6'
            >
                <ModalContent className='flex flex-col items-center px-5    '>
                    <h2>Select playlist to add <span className='font-bold'>{song.title} - {song.artist.name}</span></h2>
                    <div className='w-full h-60 overflow-y-scroll'>
                        {playlists.map((playlist) => (
                            <Button key={playlist._id} className='flex w-full justify-evenly my-2' onClick={() => {
                                playlist.songs.push(song)
                                if (playlist._id !== undefined) {
                                    updatePlaylist(playlist._id, playlist.songs)
                                }
                            }}>
                                <p>{playlist.name}</p>
                                <p>{playlist.owner.username}</p>
                            </Button>
                        ))}
                    </div>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default SongActions