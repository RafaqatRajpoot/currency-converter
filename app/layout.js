import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Currency Converter',
  description: 'This application convert between currencies with real-time exchange rates. An essential tool for travelers, investors, and anyone dealing with international currencies. Simple, accurate, and user-friendly.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='bg-custom-blue font-roboto m-0'>
          {children}
        </div>
      </body>
    </html>
  )
}
