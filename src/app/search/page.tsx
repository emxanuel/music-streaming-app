'use client'

import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Input, Button, Select, SelectItem } from '@nextui-org/react'
import { searchAlbum, searchSong } from '@/functions/api/search'
import { TAlbum, TSong } from '@/types'
import Image from 'next/image'
import Song from '../../components/Song'
import AlbumItem from '@/components/AlbumItem'

const Search = () => {
    enum filters {
        ARTIST = 'artist',
        ALBUM = 'album'
    }
    const [songs, setSongs] = useState<TSong[]>([])
    const [albums, setAlbums] = useState<TAlbum[]>([])
    const [query, setQuery] = useState('')
    const [filter, setFilter] = useState<filters>()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        console.log()
    }, [])

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        console.log(filter)
        switch (filter){
            case undefined:
                searchSong(query, setSongs, setLoading)
                break
            case filters.ALBUM:
                searchAlbum(query, setAlbums, setLoading)
                break
        }
    }



    return (
        <div className='h-screen w-screen flex flex-col items-center'>
            <form className='flex w-3/12 items-center gap-5 flex-col'>
                <div className='flex w-full'>
                    <Input label='search' onChange={e => setQuery(e.target.value)} />
                    <Button className='h-full' onClick={handleSubmit}>
                        <Icon fontSize={'26px'} icon='tabler:search' />
                    </Button>
                </div>
                <div className='flex justify-between w-full'>
                    <label>Search by: </label>
                    <Select label='filter' onChange={(e) => setFilter(e.target.value as filters)}>
                        <SelectItem key={filters.ARTIST} value={filters.ARTIST}>Artist</SelectItem>
                        <SelectItem key={filters.ALBUM} value={filters.ALBUM}>Album</SelectItem>
                    </Select>
                </div>
            </form>
            <div className='w-7/12'>
                {filter === undefined ? songs.length === 0 ? (
                    <div className='flex justify-center'>
                        <h2>No results to show</h2>
                    </div>
                ) : loading ? (
                    <div className='flex flex-col items-center'>
                        <p>loading...</p>
                    </div>
                ) : (
                    <div>
                        {songs.map((result, index) => (
                            <Song data={result} key={index} />
                        ))}
                    </div>
                ) : filter === filters.ALBUM ? (
                    albums.map((album, index) => (
                        <AlbumItem 
                            key={index} 
                            title={album.title}
                            artist={album.artist.name}
                            cover={album.cover_medium}
                            id={album.id}
                        />
                    ))
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    )
}

export default Search