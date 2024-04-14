'use client'
import React from 'react'
import { Input } from '@nextui-org/react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useUserContext } from '@/contexts/UserContext'

const Footer = () => {
    const {user} = useUserContext()
    return (
        <div className={`flex flex-col md:flex-row items-center ${user._id === ''? 'block' : 'hidden'}`}>
            <div className='md:w-1/2 w-full  flex flex-col items-center h-72'>
                <h2 className='text-2xl py-10'>Social Media</h2>
                <ul className='flex flex-col items-center gap-3'>
                    <li className='grid grid-cols-2 w-8/12'><Icon icon={'logos:twitter'} /> @soundwaveofficial</li>
                    <li className='grid grid-cols-2 w-8/12'><Icon icon={'skill-icons:instagram'} /> @soundwave</li>
                </ul>
            </div>
            <div className='bg-[#0B7A75] md:w-1/2 flex flex-col items-center py-20 w-full '>
                <h2 className='text-2xl py-10'>Contact us</h2>
                <form action="" className='w-full flex flex-col items-center gap-5'>
                    <div className='flex w-7/12'>
                        <label htmlFor="" className='w-52'>E-Mail</label>
                        <Input type="text" className='' />
                    </div>
                    <div className='flex w-7/12'>
                        <label htmlFor="" className='w-52'>Phone Number</label>
                        <Input type="text" className='' />
                    </div>
                    <div className='flex w-7/12'>
                        <label htmlFor="" className='w-52'>Message</label>
                        <Input type="text" className='' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Footer