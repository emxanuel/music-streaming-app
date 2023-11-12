'use client'

import React, { useState } from 'react'
import { Input, Button } from '@nextui-org/react'
import { Link } from '@nextui-org/react'
import { login } from '@/functions/api/auth'
import { Icon } from '@iconify/react/dist/iconify.js'
import type { TUser } from '@/types.d.ts'
import { emptyUser } from '@/utilities/emptyObjects'
import { useUserContext } from '@/contexts/UserContext' 
import { useRouter } from 'next/navigation'

const FormLogin = () => {
    const router = useRouter()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useUserContext()

    const handleSubmit = () => {
        login(username, password, setUser)
        router.push('/')
    }

    return (
        <div className='flex border items-center'>
            <div className='hidden md:flex md:w-96 items-center flex-col pt-12 border-r h-full rounded-l-md'>
                <h1 className='text-3xl'>Sound Wave</h1>
                <p className='text-2xl mt-24'>Welcome Again</p>
            </div>
            <form action="" className='md:w-96 flex flex-col items-center gap-5 mx-10 my-10 rounded-r-md'>
                <h2 className='text-3xl'>Log in to your account</h2>
                <Input className='max-w-sm' type='text' label='username' onChange={e => setUsername(e.target.value)} />
                <Input className='max-w-sm' type='password' label='password' onChange={e => setPassword(e.target.value)} />
                <Button className='duration-150 hover:bg-default-500 max-w-sm' variant='solid' color='primary' fullWidth onClick={handleSubmit}>Login</Button>
                <p>Or</p>
                <Button className='duration-150 hover:bg-default-500 h-10 max-w-sm' fullWidth>
                    <span className='flex items-center gap-4 text-lg'><Icon icon={'logos:google-icon'} />Sign in with Google</span>
                </Button>
                <p>Don{"'"}t have an account? <Link className='hover:text-primary-400 duration-150' href={'/register'}>Register</Link></p>
            </form>
        </div>

    )
}

export default FormLogin