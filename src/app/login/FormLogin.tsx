'use client'

import React from 'react'
import { Input, Button } from '@nextui-org/react'
import Link from 'next/link'

const FormLogin = () => {
    return (
        <form action="" className='w-3/12 flex flex-col items-center gap-5'>
            <h1 className='text-3xl'>Log in to your account</h1>
            <Input type='email' label='email' />
            <Input type='password' label='password' />
            <Button className='duration-150 hover:bg-default-500' variant='solid' color='primary' fullWidth>Login</Button>
            <p>Don{"`"}t have an account? <Link className='hover:text-primary-400 duration-150' href={'/register'}>Register</Link></p>
        </form>
    )
}

export default FormLogin