'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Input, Button, Select, SelectItem } from '@nextui-org/react'
import { searchAlbum, searchSong } from '@/functions/api/search'
import { TAlbum, TSong } from '@/types'
import Image from 'next/image'
import Song from '../../components/Song'
import AlbumItem from '@/components/AlbumItem'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

const Search = () => {
    enum filters {
        ARTIST = 'artist',
        ALBUM = 'album',
        ALL = 'all'
    }
    const router = useRouter()
    const searchInput = useRef<HTMLInputElement | null>(null)
    const searchParams = useSearchParams()
    const queryFilter = searchParams.get('filter')
    const search = searchParams.get('search')
    const [songs, setSongs] = useState<TSong[]>([])
    const [albums, setAlbums] = useState<TAlbum[]>([])
    const [query, setQuery] = useState('')
    const [filter, setFilter] = useState<filters>(filters.ALL)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log(search, queryFilter === filters.ALL)
        switch (queryFilter) {  
            case filters.ALL:
                searchSong(search !== null? search : '', setSongs, setLoading)
                break
            case filters.ALBUM:
                searchAlbum(search? search : '', setAlbums, setLoading)
                break
        }
        if (search !== null && searchInput.current !== null){
            setQuery(search)
            searchInput.current.value = search
        }
    }, [search, queryFilter, filters.ALL, filters.ALBUM])

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()


    }

    useEffect(() => {
        router.push(`/search?search=${query}&filter=${filter}`)

    }, [filter, query, router])

    return (
        <div className='h-screen w-screen flex flex-col items-center'>
            <form className='flex md:w-3/12 items-center gap-5 flex-col'>
                <div className='flex w-full'>
                    <Input ref={searchInput} label='search' onChange={e => setQuery(e.target.value)} />
                    <Link className='h-full flex items-center justify-center w-20' href={{ pathname: 'search', query: { search: query, filter: filter } }}>
                        <Icon fontSize={'26px'} icon='tabler:search' />
                    </Link>
                </div>
                <div className='flex justify-between w-full'>
                    <label>Search by: </label>
                    <Select label='filter' onChange={(e) => setFilter(e.target.value as filters)}>
                        <SelectItem key={filters.ARTIST} value={filters.ARTIST}>Artist</SelectItem>
                        <SelectItem key={filters.ALBUM} value={filters.ALBUM}>Album</SelectItem>
                    </Select>
                </div>
            </form>
            <div className='md:w-7/12'>
                {filter === filters.ALL ? songs.length === 0 ? (
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