'use client'

import React, { useEffect, useState } from 'react'
import { Input, Button, Link, Select, SelectItem } from '@nextui-org/react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { addUser } from '@/functions/api/users'
import { useUserContext } from '@/contexts/UserContext'
import { redirect } from 'next/navigation'

const FormRegister = () => {
    const { user } = useUserContext()
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
        console.log('first')
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
    return (
        <div className='flex border items-center flex-col-reverse md:flex-row rounded-md'>
            <div className='md:w-96 items-center flex flex-col justify-center'>
                <Button className='duration-150 hover:bg-default-500 h-12'>
                    <span className='flex items-center gap-4 text-lg'><Icon icon={'logos:google-icon'} />Sign in with Google</span>
                </Button>
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
        </div>
    )
}

export default FormRegister