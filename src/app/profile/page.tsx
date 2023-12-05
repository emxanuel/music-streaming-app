'use client'

import Layout from '@/components/Layout'
import { useUserContext } from '@/contexts/UserContext'
import { emptyUser } from '@/utilities/emptyObjects'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'

const Profile = () => {
    const {user, setUser} = useUserContext()
    const router = useRouter()
    return (
        <div>
            <Button onClick={() => {
                setUser(emptyUser)
                router.push('/')
            }}>Log Out</Button>
        </div>
    )
}

export default Profile