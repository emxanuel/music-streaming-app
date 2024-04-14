'use client'

import React, { useState } from 'react'
import Link from 'next/link';
import {
    Navbar as Nav,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuToggle,
} from "@nextui-org/react";
import { useUserContext } from '@/contexts/UserContext';

const menuItems = [
    {
        title: 'Log in',
        href: '/login'
    },
    {
        title: 'Sign up',
        href: '/register'
    }
]

const Navbar = () => {
    const { user } = useUserContext()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <Nav className={`border-b-2 border-b-neutral-500 ${user._id === '' ? 'flex flex-col' : 'hidden'} z-20`} shouldHideOnScroll isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
            <NavbarMenuToggle className='md:hidden'></NavbarMenuToggle>
            <NavbarBrand>
                <Link href={'/'}><h1 className='text-2xl'>SoundWave</h1></Link>
            </NavbarBrand>
            <NavbarContent className='hidden md:flex md:justify-center items-center justify-center gap-40'>
                {
                    menuItems.map(i => (
                        <NavbarItem key={i.title}><Link prefetch={false} href={i.href} className='bgBlue py-2 text-lg px-5 rounded-md'>{i.title}</Link></NavbarItem>
                    ))
                }
            </NavbarContent>
            <NavbarMenu>
                <NavbarItem><Link href={'/'} className='bgBlue py-2 text-lg px-5 rounded-md' onClick={() => {
                    setIsMenuOpen(false)
                }}>Home</Link></NavbarItem>
                {
                    menuItems.map(i => (
                        <NavbarItem key={i.title}><Link prefetch={false} href={i.href} className='bgBlue py-2 text-lg px-5 rounded-md' onClick={() => {
                            setIsMenuOpen(false)
                        }}>{i.title}</Link></NavbarItem>
                    ))
                }
            </NavbarMenu>
        </Nav>
    )
}

export default Navbar