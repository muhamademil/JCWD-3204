"use client"
import React, { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Cookies from 'js-cookie'

export default function Navbar() {

    const router = useRouter()
    const pathname = usePathname()
    const storedEmail = Cookies.get('email')

    useEffect(() => {
        if (storedEmail !== undefined) {
            return
        } else {
            router.push('/auth/register')
        }
    }, [])


    return (
        <div className={`${pathname === '/auth/register' ? 'hidden' : ' w-screen h-20 p-4 bg-orange-500 text-white flex justify-between items-center fixed top-0'}`}>
            <div className='text-lg font-semibold'>
                <h2>Sumber Makmur</h2>
            </div>
            <div className='flex gap-x-5'>
                <p>Home</p>
                <p>{storedEmail !== undefined ? `Hello, ${storedEmail}` : "Profile"}</p>
            </div>
        </div>
    )
}
