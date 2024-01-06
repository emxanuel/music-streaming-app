'use client'

import React, { useEffect, useState } from 'react'
import { Input, Button, Link, Modal, ModalContent } from '@nextui-org/react'
import { addUser } from '@/functions/api/users'
import { useUserContext } from '@/contexts/UserContext'
import { redirect } from 'next/navigation'
import { gapi } from 'gapi-script'
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login'
import { clientID } from '@/functions/auth/google'
import dynamic from 'next/dynamic'

const FormRegister = () => {
    const { user } = useUserContext()
    const [gData, setGData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        username: ''
    })
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    })
    const [message, setMessage] = useState({
        text: '',
        style: ''
    })
    const [isModalOpen, setIsModalOpen] = useState(false)
    const confirmPassword = () => {
        const password = document.getElementById('password') as HTMLInputElement
        const confirm = document.getElementById('confirm') as HTMLInputElement

        return password.value === confirm.value
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    if (user._id !== '0' && user._id !== '') {
        redirect('/')
    }

    const handleSubmit = () => {
        if (confirmPassword()) {
            addUser(form, setMessage)
        }
        else {
            setMessage({
                text: 'Passwords dont match',
                style: 'text-red-500'
            })
        }
    }

    const googleSuccess = (
        response: GoogleLoginResponse,
    ) => {
        setGData({
            firstName: response.profileObj.givenName,
            lastName: response.profileObj.familyName,
            email: response.profileObj.email,
            password: response.profileObj.googleId,
            username: ''
        })
        setIsModalOpen(true)

        // addUser(data, setMessage)
    };

    useEffect(() => {
        addUser(gData, setMessage)
    }, [gData])

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
        <div className='flex border items-center flex-col-reverse md:flex-row rounded-md'>
            
            <div className='md:w-96 items-center flex flex-col justify-center'>
                
                <GoogleLogin
                    clientId={clientID}
                    onSuccess={(res) => googleSuccess(res as GoogleLoginResponse)}
                    buttonText='Sign up with Google'

                />
            </div>
            <form action="" className='w-96 flex flex-col items-center gap-3 mx-10 my-10 rounded-r-md' onSubmit={e => { e.preventDefault(); handleSubmit() }}>
                <h2 className='text-3xl'>Create an account</h2>
                <Input className='' onChange={handleInputChange} name='firstName' type='text' label='first name' isRequired />
                <Input className='' onChange={handleInputChange} name='lastName' type='text' label='last name' isRequired />
                <Input className='' onChange={handleInputChange} name='username' type='text' label='username' isRequired />
                <Input className='' onChange={handleInputChange} name='email' type='email' label='email address' isRequired />
                <Input className='' onChange={handleInputChange} id='password' name='password' type='password' label='password' isRequired />
                <Input className='' onChange={handleInputChange} id='confirm' name='confirmPassword' type='password' label='confirm password' isRequired />
                <Input className='duration-150 hover:bg-default-500 rounded-md' type='submit' value={'Sign Up'} color='primary' />
                <p className={`${message.style}`}>{message.text}</p>
                <p>Do you have an account? <Link className='hover:text-primary-400 duration-150' href={'/login'}>Log In</Link></p>

            </form>
            <Modal
                isOpen={isModalOpen}
                backdrop='blur'
                size='sm'
                className='absolute z-40'
                hideCloseButton
            >
                <ModalContent className='flex flex-col gap-10 px-10 py-10'>
                    <h1 className='text-center text-2xl'>Write your username</h1>
                    <Input
                        className=''
                        id='g-username'
                        name='username'
                        type='text'
                        label='username'
                        isRequired />   
                    <Button size='md' onClick={() => {
                        const input = document.getElementById('g-username') as HTMLInputElement
                        setGData({
                            ...gData,
                            username: input.value
                        })
                        setIsModalOpen(false)
                    }}>
                        <span>Save</span>
                    </Button>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default dynamic(() => Promise.resolve(FormRegister), {
    ssr: false
})