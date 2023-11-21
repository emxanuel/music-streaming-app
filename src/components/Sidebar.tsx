'use client'
import { useUserContext } from '@/contexts/UserContext'
import { createPlaylist, getUserPlaylists } from '@/functions/api/playlists'
import { TPlaylist } from '@/types'
import React, { useEffect, useState } from 'react'
import Playlist from './Playlist'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Button, Input, Modal, ModalContent } from '@nextui-org/react'
import { emptyPlaylist } from '@/utilities/emptyObjects'

const Sidebar = () => {
    const { user } = useUserContext()
    const [playlists, setPlaylists] = useState<TPlaylist[]>([])
    const [playlistName, setPlaylistName] = useState('')
    const [newPlaylist, setNewPlaylist] = useState<TPlaylist>({
        ...emptyPlaylist,
        owner: {
            username: user.username,
            id: user._id,
        }
    })
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        getUserPlaylists(user._id, setPlaylists)
    }, [user._id])

    const savePlaylist = async () => {
        await createPlaylist(newPlaylist)
        await getUserPlaylists(user._id, setPlaylists)
    }

    useEffect(() => {
        if (newPlaylist.name !== '') {
            createPlaylist(newPlaylist)
            getUserPlaylists(user._id, setPlaylists)
        }
    }, [newPlaylist, user._id])

    return (
        <div className='w-1/4 border-r-small h-full md:flex flex-col hidden'>
            <div className='border-b-small p-5 flex justify-start'>
                {user.username}
            </div>
            <div className='flex flex-col items-center overflow-y-scroll'>
                <h2 className='text-lg border-b-small w-full text-center py-2'>Playlists</h2>
                {playlists.length !== 0 ? playlists.map((p, index) => (
                    <Playlist info={p} key={index}></Playlist>
                )) : (
                    <div></div>
                )}
                <Button fullWidth className='bg-black  flex items-center justify-around' onClick={() => setOpenModal(true)}>
                    <Icon className='bg-neutral-900 rounded-md' fontSize={'24px'} icon="material-symbols:add" />
                    <p>Create new</p>
                </Button>
                <Modal
                    isOpen={openModal}
                    onClose={() => setOpenModal(open => !open)}
                    backdrop='blur'
                >
                    <ModalContent className='flex flex-col items-center py-10'>
                        <h2 className='text-2xl border-b mb-4'>Create a new playlist</h2>
                        <form className='flex items-center h-full'>
                            <Input size='sm' label='Playlist name' id='playlistName' onChange={e => setPlaylistName(e.target.value)} />
                            <Button size='lg' type='submit' onClick={async (e) => {
                                e.preventDefault()
                                setNewPlaylist(old => ({
                                    ...old,
                                    name: playlistName,
                                    createDate: new Date().toLocaleTimeString()
                                }))

                                await savePlaylist()
                                setOpenModal(false)

                            }}>Save</Button>
                        </form>
                        <p></p>
                    </ModalContent>
                </Modal>
            </div>
        </div>
    )
}

export default React.memo(Sidebar)