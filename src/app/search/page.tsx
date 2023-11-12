'use client'

import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Input, Button, Select, SelectItem } from '@nextui-org/react'
import { searchSong } from '@/functions/api/search'
import { TSong } from '@/types'
import Image from 'next/image'
import Song from '../../components/Song'

const Search = () => {
    enum filters {
        ARTIST = 'artist',
        ALBUM = 'album'
    }
    const [results, setResults] = useState<TSong[]>([])
    const [query, setQuery] = useState('')
    const [filter, setFilter] = useState<filters>()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        console.log()
    }, [])

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        console.log(filter)
        if (filter === undefined) {
            searchSong(query, setResults, setLoading)
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
                    <Select label='filter'>
                        <SelectItem key={'2'} value={filters.ARTIST}>Artist</SelectItem>
                        <SelectItem key={'3'} value={filters.ALBUM}>Album</SelectItem>
                    </Select>
                </div>
            </form>
            <div className='w-7/12'>
                {results.length === 0 ? (
                    <div className='flex justify-center'>
                        <h2>No results to show</h2>
                    </div>
                ) : loading? (
                    <div className='flex flex-col items-center'>
                        <p>loading...</p>
                    </div>
                ) : (
                    <div>
                        {results.map((result, index) => (
                            <Song data={result} key={index}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Search