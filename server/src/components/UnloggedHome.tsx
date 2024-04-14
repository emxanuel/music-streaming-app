import React from 'react'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import img1 from '../assets/pexels-cottonbro-studio-4571219.jpg'
import img2 from '../assets/1140-ruben-blades-life-in-music-esp.jpg'
import img3 from '../assets/Juan_Luis_Guerra_Altos_de_Chavon-1.webp'
import img4 from '../assets/anuel-aa-1024x569.jpg'
import img5 from '../assets/pexels-sebastian-ervi-1763075.jpg'
import img6 from '../assets/reggaeton-antiguo.jpg'
import img7 from '../assets/tupac-notorious-redman.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

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

const UnloggedHome = () => {
    return (
        <div className=''>
            <div className="flex justify-around px-20 py-44 items-center bg-white bg-opacity-5">
                <div className='flex flex-col items-center gap-8'>
                    <p className="text-lg w-60">
                        Create an account to start listening to your
                        favorite artists 100% free and without interrumptions
                    </p>
                    <Button className='text-lg bg-[#0B7A75]'>Sign Up</Button>
                </div>
                <Image src={img1} alt="soundwave" className="w-5/12" />
            </div>
            <div className="flex justify-around items-center py-44 bg-[#0B7A75] bg-opacity-10">
                <div className='flex flex-col items-center gap-8'>
                    <p className="text-lg w-60">All genres you can imagine, are already in SoundWave</p>
                    <Button className='bg-[#0B7A75] text-lg'>{"Let's See"}</Button>
                </div>
                <div className='w-5/12'>
                    <Swiper
                        modules={[Pagination, Navigation, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay
                        pagination
                    >
                        {images.map(i => (
                            <SwiperSlide key={i.id}><Image className='w-full aspect-video -z-10 relative' src={i.img} alt="soundwave music genre" /></SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default UnloggedHome