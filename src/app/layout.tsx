import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StoreLayout from './layout/pageLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Opremi Dom ',
  description: 'Opremi dom shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoreLayout>
      <div>
        {children}
      </div>
    </StoreLayout>
  )
}
