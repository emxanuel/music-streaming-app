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
        title: 'Home',
        href: '/'
    },
    {
        title: 'Login',
        href: '/login'
    }
]

const Navbar = () => {
    return (
        <Nav>
            <NavbarMenuToggle className='md:hidden'/>
            <NavbarContent className='hidden md:flex'>
                <NavbarItem><Link href={'/'}>Home</Link></NavbarItem>
                <NavbarItem><Link href={'/login'}>Login</Link></NavbarItem>
            </NavbarContent>
            
            <NavbarMenu>
                {
                    menuItems.map(i => (
                        <NavbarMenuItem key={i.title}>
                            <Link href={i.href}>{i.title}</Link>
                        </NavbarMenuItem>
                    ))
                }
            </NavbarMenu>
        </Nav>
    )
}

export default Navbar