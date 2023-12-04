'use client'

import Layout from '@/components/Layout'
import { useUserContext } from '@/contexts/UserContext'
import { emptyUser } from '@/utilities/emptyObjects'
import Link from 'next/link'
import React from 'react'

const Profile = () => {
    const {user, setUser} = useUserContext()
    return (
        <div>
        </div>
    )
}

export default Profile