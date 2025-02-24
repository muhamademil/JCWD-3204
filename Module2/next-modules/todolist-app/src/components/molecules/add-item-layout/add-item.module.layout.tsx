"use client"
import React, { useState, useEffect } from 'react'
import Toastify from 'toastify-js'

export default function AddItemLayout() {

    const [value, setValue] = useState<string>("")
    const [item, setItem] = useState<string[]>([])

    function addItem(value: string) {
        setItem(prevItems => [...prevItems, value])
    }

    useEffect(() => {
        if (item.length > 0) {
            Toastify({
                text: 'Value is added to item',
                duration: 3000, // Duration in milliseconds
                className: 'p-3'
            }).showToast();
        } else {
            return
        }
    }, [item])

    console.log('item : ', item)

    return (
        <div className='w-full h-full bg-slate-200 p-3 flex flex-col gap-y-5 justify-center'>
            <div className='flex gap-x-5'>
                <input
                    onChange={(e) => setValue(e.target.value)}
                    className='p-2 rounded-md text-black'
                />
                <button
                    id='add-item'
                    title='Add Item'
                    onClick={() => addItem(value)}
                    className='p-3 bg-blue-500 font-semibold text-center '
                >Add Item</button>
            </div>
            <div className='flex flex-col gap-y-5'>
                {
                    item.map((item, key) => {
                        return (
                            <div
                                key={key}
                                className='p-3 w-full h-full bg-slate-500 text-black'>
                                {item}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
