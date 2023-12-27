'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Input, Button, Select, SelectItem } from '@nextui-org/react'
import { searchAlbum, searchArtist, searchSong } from '@/functions/api/search'
import { TAlbum, TArtist, TSong } from '@/types'
import Image from 'next/image'
import Song from '../../components/Song'
import AlbumItem from '@/components/AlbumItem'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import AppBar from '@/components/AppBar'
import Sidebar from '@/components/Sidebar'
import CurrentSong from '@/components/CurrentSong'
import ArtistItem from '@/components/ArtistItem'
import Layout from '@/components/Layout'
import SkeletonSearch from './Skeleton'
import { metadata } from '../layout'

const Search = () => {
    enum filters {
        ARTIST = 'artist',
        ALBUM = 'album',
        ALL = 'all'
    }
    const router = useRouter()
    const searchInput = useRef<HTMLInputElement | null>(null)
    const filterSelect = useRef<HTMLSelectElement | null>(null)
    const searchParams = useSearchParams()
    const queryFilter = searchParams.get('filter')
    const search = searchParams.get('search')
    const [songs, setSongs] = useState<TSong[]>([])
    const [albums, setAlbums] = useState<TAlbum[]>([])
    const [artists, setArtists] = useState<TArtist[]>([])
    const [query, setQuery] = useState('')
    const [filter, setFilter] = useState<filters>(filters.ALL)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()
        switch (queryFilter) {
            case filters.ALL:
                searchSong(search !== null ? search : '', setSongs, setLoading, controller)
                break
            case filters.ALBUM:
                searchAlbum(search ? search : '', setAlbums, setLoading, controller)
                break
            case filters.ARTIST:
                searchArtist(search ? search : '', setArtists, setLoading, controller)
        }
        if (search !== null && searchInput.current !== null && filterSelect.current !== null) {
            setQuery(search)
            searchInput.current.value = search
            filterSelect.current.value = filters.ALL
        }
        if (filter.length === 0) {
            setFilter(filters.ALL)
        }

        return () => controller.abort()
    }, [search, queryFilter, filters.ALL, filters.ALBUM, filters.ARTIST, filter.length])

    useEffect(() => {
        router.push(`/search?search=${query}&filter=${filter}`)

    }, [filter, query, router])

    return (
        <div className='flex flex-col items-center h-full py-5'>
            <form className='flex items-center gap-5 flex-col md:w-9/12 w-11/12'>
                <div className='flex w-full'>
                    <Input fullWidth variant='bordered' ref={searchInput} label='search' onChange={e => setQuery(e.target.value)} />
                    <Link className='flex items-center justify-center w-20' href={{ pathname: 'search', query: { search: query, filter: filter } }}>
                        <Icon className='flex flex-col items-center h-full' fontSize={'26px'} icon='tabler:search' />
                    </Link>
                </div>
                <div className='flex justify-between w-full items-center gap-5'>
                    <label className='whitespace-nowrap'>Search by: </label>
                    <Select fullWidth variant='bordered' ref={filterSelect} label='filter' onChange={(e) => setFilter(e.target.value as filters)}>
                        <SelectItem variant='bordered' key={filters.ARTIST} value={filters.ARTIST}>Artist</SelectItem>
                        <SelectItem variant='bordered' key={filters.ALBUM} value={filters.ALBUM}>Album</SelectItem>
                    </Select>
                </div>
            </form>
            <div className='md:w-9/12 flex-grow overflow-scroll pb-20 w-full'>
                {filter === filters.ALL ? songs.length === 0 ? (
                    <div className='flex justify-center py-5'>
                        <h2>No results to show</h2>
                    </div>
                ) : loading ? (
                    <div className='flex flex-col items-center'>
                        <SkeletonSearch />
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
                ) : filter === filters.ARTIST ? (
                    artists.map((artist, index) => (
                        <ArtistItem
                            key={index}
                            name={artist.name}
                            image={artist.picture_medium}
                            id={artist.id}
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