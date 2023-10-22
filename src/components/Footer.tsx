'use client'
import React from 'react'
import { Input } from '@nextui-org/react'

const Footer = () => {
    return (
        <div className='flex items-center'>
            <div className='w-1/2 flex flex-col items-center'>
                <h2 className='text-2xl py-10'>Social Media</h2>
                <ul className='flex flex-col items-center gap-3'>
                    <li>Twitter: @soundwaveofficial</li>
                    <li>Instagram: @soundwave</li>
                    <li>Youtube: TheSoundWaveChannel</li>
                </ul>
            </div>
            <div className='bg-[#0B7A75] w-1/2 flex flex-col items-center py-20'>
                <h2 className='text-2xl py-10'>Contact us</h2>
                <form action="" className='w-full flex flex-col items-center gap-5'>
                    <div className='flex w-7/12'>
                        <label htmlFor="" className='w-52'>E-Mail</label>
                        <Input type="text" className=''/>
                    </div>
                    <div className='flex w-7/12'>
                        <label htmlFor="" className='w-52'>Phone Number</label>
                        <Input type="text" className=''/>
                    </div>
                    <div className='flex w-7/12'>
                        <label htmlFor="" className='w-52'>Message</label>
                        <Input type="text" className=''/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Footer