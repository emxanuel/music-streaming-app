'use client'
import React from 'react'
import Sidebar from './Sidebar'
import CurrentSong from './CurrentSong'
import AppBar from './AppBar'
import { useUserContext } from '@/contexts/UserContext'
import Navbar from './Navbar'
import Footer from './Footer'

interface Props {
    children: JSX.Element
}

const Layout: React.FC<Props> = ({ children }) => {
    const { user } = useUserContext()
    return (
        user._id !== '0' && user._id !== '' ? (
            <div className='flex h-screen w-full'>
                <Sidebar />
                <div className='flex flex-col items-center w-full relative h-full'>
                    <div className='w-full h-full'>
                        {children}
                    </div>
                    <CurrentSong />
                    <AppBar />
                </div>
            </div>
        ) : (
            <div className='flex flex-col'>
                <Navbar />
                {children}
                <Footer />
            </div>
        )

    )
}

export default Layout