import React from 'react'
import { Oswald } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'], weight: '400' })
function Footer({footerTitle}) {
  return (
    <footer className={`bg-gray-800 p-4 ${oswald.className} mt-96`}>
        <p className="text-white text-right">{footerTitle}</p>
    </footer>
  )
}

export default Footer