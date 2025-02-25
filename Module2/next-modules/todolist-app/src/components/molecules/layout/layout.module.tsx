"use client"
import { useContext, useEffect } from "react"
import { useRouter } from 'next/navigation'
import Cookies from "js-cookie"
import { ThemeContext } from "@/utils/context/themeContext"

interface ILayout {
    children?: React.ReactNode
}

export default function Layout({ children }: ILayout) {

    const { theme, toggleTheme } = useContext(ThemeContext)
    const router = useRouter()

    useEffect(() => {
        const email = Cookies.get('email')
        console.log('email ', email)
        if (email === undefined) {
            router.push('/auth')
        } else {
            return
        }
    }, [])


    return (
        <div className={`${theme === "light" ? 'bg-slate-100' : 'bg-slate-900'} w-screen h-full flex flex-col justify-center items-center`}>
            <div className="flex bg-blue-500 justify-between fixed top-0 w-screen h-20 p-4">
                <h2 className="font-semibold text-white">Modul 2 - JCWD3204</h2>
                <button
                    className="bg-blue-700 p-3 rounded-md"
                    onClick={toggleTheme}
                >{theme === "light" ? "Light Mode" : "Dark Mode"}</button>
            </div>
            {children}
        </div>
    )
}
