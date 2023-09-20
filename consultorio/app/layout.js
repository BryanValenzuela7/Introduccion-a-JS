import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Consultorio',
  description: 'Aplicacion creada para proposito educativo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header title='Consultorio Web'/>
        {children}
        <Footer footerTitle='Footer'/>
        </body>
    </html>
  )
}
