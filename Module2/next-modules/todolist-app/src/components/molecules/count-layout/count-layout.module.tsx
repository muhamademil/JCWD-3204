"use client"
import React, { useEffect } from 'react'
import { useCount } from '@/custom-hooks/useCount'
import Button from '@/components/atomics/button/button.module'

export default function CountLayout() {

    const { count, addCount, decreaseCount } = useCount()

    useEffect(() => {
        console.log('mounting component CountLayout ...') // -> fase ketika komponen mengalami mounting
        // console.log('updating count : ', count) // -> fase ketika komponen mengalami updating

        return () => {
            console.log('unmounting component CountLayout ...') // -> fase ketika komponen mengalami unmounting
        }
    }, [])


    return (
        <div className='w-full h-full bg-slate-200 flex justify-center items-center'>
            <div className='flex w-80 gap-x-5'>
                <Button
                    id='add-count'
                    title='Add Count'
                    onClick={addCount}
                />
                <p className='font-semibold text-black mx-5'>Count : {count}</p>
                <Button
                    id='decrease-count'
                    title='Decrease Count'
                    onClick={decreaseCount}
                />
            </div>
        </div>
    )
}
