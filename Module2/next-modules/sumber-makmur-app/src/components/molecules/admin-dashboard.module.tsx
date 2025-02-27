"use client"
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { productSchema, ProductInput } from '@/utils/validator/product.schema'
import { axiosInstance } from '@/utils/api/products.api'
import * as Dialog from '@radix-ui/react-dialog'

export default function AdminDashboard() {

    const [products, setProduct] = useState<ProductInput[] | null>(null)
    const [editProduct, setEditProduct] = useState<ProductInput | null>(null)
    const { register, handleSubmit, formState: { errors } } = useForm<ProductInput>({
        resolver: zodResolver(productSchema)
    })

    async function fetchProducts() {
        const response = await axiosInstance.get('/products')
        setProduct(response.data)
    }

    function onSubmitProduct() { }
    function deleteProduct() { }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className='w-screen min-h-screen p-6 bg-gray-100'>
            <h1 className='text-2xl font-bold mb-4'>Sumber Makmur Dashboard</h1>
            {/* Tempat untuk naruh popup CRUD */}
            <table className='w-full mt-6 border'>
                <thead>
                    <tr className='bg-gray-200 border'>
                        <th className='p-2 border'>Nama</th>
                        <th className='p-2 border'>Harga</th>
                        <th className='p-2 border'>Stock</th>
                        <th className='p-2 border'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map((item: ProductInput, key: number) => {
                            return (
                                <tr key={key}>
                                    <td className='p-2 border'>{item.name}</td>
                                    <td className='p-2 border'>{item.price}</td>
                                    <td className='p-2 border'>{item.stock}</td>
                                    <td className='p-2 border flex gap-2'>
                                        <Dialog.Root>
                                            <Dialog.Trigger className='px-2 py-1 bg-yellow-500 text-white rounded'>
                                                Edit
                                            </Dialog.Trigger>
                                        </Dialog.Root>
                                        <button
                                            className='px-2 py-1 bg-red-500 text-white rounded'
                                        >Hapus</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
