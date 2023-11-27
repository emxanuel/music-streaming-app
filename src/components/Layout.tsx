import React from 'react'
import Sidebar from './Sidebar'
import CurrentSong from './CurrentSong'
import AppBar from './AppBar'

interface Props {
    children: JSX.Element
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
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
    )
}

export default Layout