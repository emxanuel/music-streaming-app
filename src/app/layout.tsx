import '../global.css'
import type { Metadata } from 'next'
import { Providers } from "./providers"
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'Sound Wave',
  description: 'New generation music streaming',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`overflow-x-hidden`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
