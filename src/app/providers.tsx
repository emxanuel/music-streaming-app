'use client'

import { UserProvider } from '@/contexts/UserContext'
import { NextUIProvider } from '@nextui-org/react'
import { AudioProvider } from '@/contexts/SongContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
        <UserProvider>
          <AudioProvider>
            {children}
          </AudioProvider>
        </UserProvider>
    </NextUIProvider>
  )
}
