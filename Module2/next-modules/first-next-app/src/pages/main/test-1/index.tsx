import React from 'react'
import Card, { ICard } from '@/components/card/card.module'
import { data } from '@/dummy/dummyVegetable'

export default function Test1() {
    return (
        <div className='bg-white w-full h-full flex flex-col gap-y-5 justify-center items-center p-10'>
            <h2> Styling with Tailwind </h2>
            <div className='w-full h-full flex flex-col p-10 bg-slate-100 text-center'>
                <h4> ---- Contoh Palette Color --- </h4>
                <div className='flex my-5'>
                    <div className='w-40 h-40 bg-blue-50'>1</div>
                    <div className='w-40 h-40 bg-blue-100'>2</div>
                    <div className='w-40 h-40 bg-blue-200'>3</div>
                    <div className='w-40 h-40 bg-blue-300'>4</div>
                    <div className='w-40 h-40 bg-blue-400'>5</div>
                    <div className='w-40 h-40 bg-blue-500'>6</div>
                    <div className='w-40 h-40 bg-blue-600'>7</div>
                    <div className='w-40 h-40 bg-blue-700'>8</div>
                    <div className='w-40 h-40 bg-blue-800'>9</div>
                    <div className='w-40 h-40 bg-blue-900'>10</div>
                </div>
            </div>
            <div className='w-full h-full flex flex-col p-10 bg-slate-100 text-center'>
                <h4> ---- Contoh Card Component --- </h4>
                <div className='grid grid-cols-3 p-3 gap-5'>
                    {
                        data.map((item: ICard) => {
                            return (
                                <Card
                                    id={item.id}
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                    price={item.price}
                                />
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}
