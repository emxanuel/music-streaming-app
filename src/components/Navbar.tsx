'use client'

import React from 'react'
import Link from 'next/link';
import {
    Navbar as Nav,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
} from "@nextui-org/react";

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
    return (
        <Nav className='border-b-2 border-b-neutral-500'>
            <NavbarMenuToggle className='md:hidden'></NavbarMenuToggle>
            <NavbarBrand>
                <h1 className='text-2xl'>SoundWave</h1>
            </NavbarBrand>
            <NavbarContent className='hidden md:flex md:justify-center items-center justify-center gap-40'>
                {
                    menuItems.map(i => (
                        <NavbarItem key={i.title}><Link href={i.href} className='bgBlue py-2 text-lg px-5 rounded-md'>{i.title}</Link></NavbarItem>
                    ))
                }
            </NavbarContent>
        </Nav>
    )
}

export default Navbar