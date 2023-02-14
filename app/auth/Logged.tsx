'use client'

import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

interface ImageProps {
    image: string 
}

const Logged = ({ image }: ImageProps) => {
  return (
    <li className='flex gap-8 items-center'>
        <button onClick={() => signOut()} className='bg-gray-700 text-white text-sm px-6 py-2 rounded-md'>Sair</button>
        <Link href={'/dashboard'}>
            <Image className='rounded-xl' width={64} height={64} src={image} alt="" priority/>
        </Link>
    </li>
  )
}

export default Logged