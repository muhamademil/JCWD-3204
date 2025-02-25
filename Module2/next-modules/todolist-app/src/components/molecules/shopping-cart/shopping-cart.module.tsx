"use client"
import { useMemo, useState } from 'react'

interface Cart {
    name: string;
    price: number;
}
export default function ShoppingCart() {

    const [items, setItem] = useState<Cart[]>([
        {
            name: "Apel", price: 5000,
        },
        {
            name: "Pisang", price: 3000
        }
    ])

    function totalPrice() {
        return useMemo(() => {
            console.log("Menghitung total harga ...")
            return items.reduce((sum, item) => sum + item.price, 0)
        }, [items])
    }

    return (
        <div className='h-full w-full p-3 bg-slate-200 flex flex-col gap-y-3'>
            <h2 className='text-black'>Total harga : {totalPrice()}</h2>
            <button
                onClick={() => setItem([...items, {
                    name: "Parfum",
                    price: 125000
                }])}
                className='w-40 h-16 p-3 bg-blue-500 hover:bg-blue-600 text-center'>
                Tambah Barang
            </button>
            <div className='grid grid-cols-1'>
                {
                    items.map((item: Cart, key: number) => {
                        return (
                            <div
                                key={key}
                                className='flex flex-col my-5 gap-y-3 p-3 w-full h-20 bg-slate-400 text-black font-medium'
                            >
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
