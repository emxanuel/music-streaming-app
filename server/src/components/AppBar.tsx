import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'

const AppBar = () => {
    return (
        <div className='absolute bottom-0 h-20 flex items-center w-full justify-around backdrop-blur bg-black/90 z-10'>
            <Link href='/' className='flex flex-col items-center text-lg'>
                <Icon fontSize={'26px'} icon="material-symbols:home-outline-rounded" />
                <p>Home</p>
            </Link>
            <Link href='/search' className='flex flex-col items-center text-lg'>
                <Icon fontSize={'26px'} icon='tabler:search' /> 
                <p>Search</p>
            </Link>
            <Link href='/profile' className='flex flex-col items-center text-lg'>
                <Icon fontSize={'26px'} icon="ph:user-bold" />
                <p>Profile</p>
            </Link>
        </div>
    )
}

export default AppBar