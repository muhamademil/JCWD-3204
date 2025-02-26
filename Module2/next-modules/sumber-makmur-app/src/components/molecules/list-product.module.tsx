"use client"
import React, { useEffect } from 'react'
import { axiosInstance } from '@/utils/products.api'

export default function ListProduct() {

    async function getAllProducts() {
        try {
            const response = await axiosInstance.get('/products')
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllProducts()
    }, [])


    return (
        <div>ListProduct</div>
    )
}
