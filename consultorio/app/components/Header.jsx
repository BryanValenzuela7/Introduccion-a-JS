import React from 'react'
import { Oswald } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'], weight: '400' })
const Header = ({title}) => {
  return (
    <header className= {`p-8 bg-slate-900 ${oswald.className}`}>
        <h1 className="uppercase text-2xl text-white text-center font-bold">{title}</h1>
    </header>
  )
}

export default Header