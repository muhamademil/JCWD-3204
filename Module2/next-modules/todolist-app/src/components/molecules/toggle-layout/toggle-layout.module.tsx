"use client"
import React from 'react'
import { useToggle } from '@/custom-hooks/useToggle'
import Button from '@/components/atomics/button/button.module'

export default function ToggleLayout() {

    const { toggle, triggerToggle } = useToggle()

    return (
        <div className={`flex flex-col w-full h-full p-3 justify-center items-center ${toggle ? 'bg-black' : 'bg-yellow-500'}`}>
            <Button
                id='lamp-toggle'
                title={toggle ? "Mati" : "Nyala"}
                onClick={triggerToggle}
            />
        </div>
    )
}
