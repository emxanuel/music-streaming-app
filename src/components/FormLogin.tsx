'use client'

import React, { useEffect, useState } from 'react'
import { Input, Button } from '@nextui-org/react'
import { Link } from '@nextui-org/react'
import { login } from '@/functions/api/auth'
import { Icon } from '@iconify/react/dist/iconify.js'
import type { TUser } from '@/types.d.ts'
import { emptyUser } from '@/utilities/emptyObjects'
import { useUserContext } from '@/contexts/UserContext'
import { useRouter } from 'next/navigation'
import { redirect } from 'next/navigation'
import GoogleLogin, { GoogleLoginResponse } from 'react-google-login'
import { clientID } from '@/functions/auth/google'
import { gapi } from 'gapi-script'

const FormLogin = () => {
    const router = useRouter()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { user, setUser } = useUserContext()
    const [message, setMessage] = useState({
        text: '',
        style: ''
    })

    const handleSubmit = () => {
        setMessage({
            text: '',
            style: ''
        })
        login(password, setUser, username).then(result => {
            if (result === true) {
                router.push('/')
            }
            else {
                setMessage({
                    text: 'Incorrect username or password',
                    style: 'text-red-500'
                })
            }
        })
    }

    if (user._id !== '0' && user._id !== '') {
        router.push('/')
    }

    const googleLogin = (response: GoogleLoginResponse) => {
        const username = response.profileObj.email
        const password = response.profileObj.googleId
        login(password, setUser, username).then(result => {
            if (result === true) {
                router.push('/')
            }
            else {
                setMessage({
                    text: 'Incorrect username or password',
                    style: 'text-red-500'
                })
            }
        })
    }

    useEffect(() => {
        const start = () => {
            gapi.auth2.getAuthInstance({
                clientId: clientID,
                scope: ''
            })
        }

        gapi.load('client:auth2', start)
    }, [])

    return (
        <div className='flex border items-center rounded-md'>
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
                {/* <Button className='duration-150 hover:bg-default-500 h-10 max-w-sm' fullWidth>
                    <span className='flex items-center gap-4 text-lg'><Icon icon={'logos:google-icon'} />Sign in with Google</span>
                </Button> */}
                <GoogleLogin 
                    clientId={clientID}
                    onSuccess={(res) => googleLogin(res as GoogleLoginResponse)}
                />
                <p className={`${message.style}`}>{message.text}</p>
                <p>Don{"'"}t have an account? <Link className='hover:text-primary-400 duration-150' href={'/register'}>Register</Link></p>
            </form>
        </div>

    )
}

export default FormLogin