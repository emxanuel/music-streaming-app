'use client'
import React from 'react'
import img2 from '../assets/1140-ruben-blades-life-in-music-esp.jpg'
import img3 from '../assets/Juan_Luis_Guerra_Altos_de_Chavon-1.webp'
import img4 from '../assets/anuel-aa-1024x569.jpg'
import img5 from '../assets/pexels-sebastian-ervi-1763075.jpg'
import img6 from '../assets/reggaeton-antiguo.jpg'
import img7 from '../assets/tupac-notorious-redman.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useUserContext } from '@/contexts/UserContext'
import Layout from './Layout'
import UnloggedHome from './UnloggedHome'
import LoggedHome from './LoggedHome'

const images = [
    {
        id: 1,
        img: img2
    },
    {
        id: 2,
        img: img3
    },
    {
        id: 3,
        img: img4
    },
    {
        id: 4,
        img: img5
    },
    {
        id: 5,
        img: img6
    },
    {
        id: 6,
        img: img7
    },
]

const Main = () => {
    const { user } = useUserContext()
    return (
        user._id === '' ? (
            <UnloggedHome />
        ) : user._id === '0' ? (
            <div>
                Loading
            </div>
        ) : (
            <div className='h-full overflow-y-scroll pb-20'>   
                <LoggedHome />
            </div>
        )
    )
}

export default Main