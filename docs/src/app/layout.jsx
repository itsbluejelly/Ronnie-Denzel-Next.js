// IMPORTING FILES
  // IMPORTING CSS FILE
import './globals.css'
  // IMPORTING FONT
import { Roboto } from 'next/font/google'
  // IMPORTING COMPONENTS
import Navbar from '../components/Navbar/Navbar'


const roboto = Roboto({ 
  subsets: ['latin'],
  weight: '400'
})

export const metadata = {
  title: 'Tickets App',
  description: 'Learning Next.js'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
