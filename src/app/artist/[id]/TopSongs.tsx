import Song from '@/components/Song'
import { TSong } from '@/types'
import React from 'react'

interface Props {
    data: TSong[]
}

const TopSongs: React.FC<Props> = ({ data }) => {
    return (
        <div className='w-1/2 flex flex-col items-center rounded-lg h-fit shadow-lg shadow-white/5'>
            <h2 className='text-3xl border-b-[0.5px] border-b-white/5 w-11/12 text-center pb-1'>Top Songs</h2>
            <ul className='flex flex-col items-center overflow-y-scroll h-[20rem] w-full'>
                {
                    data.map((song) => (
                        <li key={song.title} className='w-full'>
                            <Song data={song} />
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default TopSongs