"use client"

import React, { useReducer } from 'react'
import { productReducer } from '@/utils/reducer/productReducer'

export default function ProductCounter() {

    const [count, dispatch] = useReducer(productReducer, 0)

    return (
        <div className='flex flex-col justify-center items-center w-screen text-black h-full my-40'>
            <h1 className='text-black font-semibold'>Jumlah Produk : {count} </h1>
            <div className='flex gap-x-5'>
                <button className='p-3 bg-blue-300' onClick={() => dispatch({ type: "increment" })}>Tambah</button>
                <button className='p-3 bg-blue-300' onClick={() => dispatch({ type: "decrement" })}>Kurang</button>
            </div>
        </div>
    )
}
