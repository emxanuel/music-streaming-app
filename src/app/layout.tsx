import '../global.css'
import type { Metadata } from 'next'
import { Providers } from "./providers"
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'
import Layout from '@/components/Layout'


export const metadata: Metadata = {
  title: 'Sound Wave',
  description: 'New generation music streaming',
}

export default function RootLayout({
  children,
}: {
  children: JSX.Element
}) {
  return (
    <html lang="en" className="dark">
      <body className={`overflow-x-hidden`}>
        <Providers>
          <Layout>
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  )
}
