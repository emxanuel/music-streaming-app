'use client'

import React, { useEffect, useState } from 'react'
import { Input, Button, Link, Select, SelectItem } from '@nextui-org/react'
import { Icon } from '@iconify/react/dist/iconify.js'

const FormRegister = () => {

    return (
        <div className='flex border w-6/12 items-center'>
            <div className='w-6/12 items-center flex flex-col pt-12 border-r h-full rounded-l-md justify-center'>
                <Button className='duration-150 hover:bg-default-500 h-12 w-10/12'>
                    <span className='flex items-center gap-4 text-lg'><Icon icon={'logos:google-icon'} />Sign in with Google</span>
                </Button>
            </div>
            <form action="" className='w-6/12 flex flex-col items-center gap-5 mx-10 my-10 rounded-r-md'>
                <h2 className='text-3xl'>Create an account</h2>
                <Input className=' h-8' type='text' label='first name' isRequired/>
                <Input className=' h-8' type='text' label='last name' isRequired/>
                <Input className=' h-8' type='text' label='username' isRequired/>
                <Input className=' h-8' type='email' label='email address' isRequired/>
                <Input className=' h-8' type='password' label='password' isRequired/>
                <Input className=' h-8' type='password' label='confirm password' isRequired/>
                <Button className='duration-150 hover:bg-default-500 h-8' variant='solid' color='primary' fullWidth>Sign Up</Button>
                <p>Do you have an account? <Link className='hover:text-primary-400 duration-150' href={'/login'}>Log In</Link></p>
            </form>
        </div>
    )
}

export default FormRegister