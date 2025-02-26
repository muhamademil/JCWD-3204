"use client"
import React, { useEffect, useState } from 'react'
import { axiosInstance } from '@/utils/products.api'
import Card, { ICard } from '@/components/atomics/card.module'

export default function ListProduct() {

    const [product, setProduct] = useState<[]>([])

    async function getAllProducts() {
        try {
            const response = await axiosInstance.get('/products')
            setProduct(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllProducts()
    }, [])


    return (
        <div className='grid grid-cols-3 justify-center items-center w-full h-full p-3'>
            {
                product?.map((item: ICard, key: number) => {
                    return (
                        <Card
                            key={key}
                            name={item?.name}
                            category={item?.category}
                            description={item?.description}
                            imageUrl={item?.imageUrl}
                            price={item?.price}
                        />
                    )
                })
            }
        </div>
    )
}
