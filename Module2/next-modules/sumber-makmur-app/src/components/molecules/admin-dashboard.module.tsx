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

    function ProductForm() {
        return (
            <Dialog.Root>
                {/* Button untuk tambah produk */}
                <Dialog.Trigger className='px-4 py-2 bg-blue-600 text-white rounded'>
                    Tambah Produk
                </Dialog.Trigger>

                {/* Form untuk tambah/edit */}
                <Dialog.Portal>
                    <Dialog.Overlay className='fixed inset-0 bg-black opacity-30'>
                        <Dialog.Content
                            className='fixed bg-white p-6 rounded shadow-lg top-1/2 left-1/2 
                        transform-translate-x-1/2 -translate-y-1/2 w-96'>
                            <h2 className='text-xl font-bold mb-4'>{editProduct ? 'Edit Produk' : 'Tambah Produk'}</h2>
                            <form action="">
                                <div className='mt-4'>
                                    <label>Nama Produk</label>
                                    <input
                                        type='text'
                                        className='block w-full p-2 border rounded'
                                        {...register('name')}
                                    />
                                    {
                                        errors.name &&
                                        <p className='text-red-500 mt-2'>{errors.name.message}</p>
                                    }
                                </div>
                                <div className='mt-4'>
                                    <label>Harga</label>
                                    <input
                                        type='number'
                                        className='block w-full p-2 border rounded'
                                        {...register('price')}
                                    />
                                    {
                                        errors.price &&
                                        <p className='text-red-500 mt-2'>{errors.price.message}</p>
                                    }
                                </div>
                                <div className='mt-4'>
                                    <label>Stock</label>
                                    <input
                                        type='number'
                                        className='block w-full p-2 border rounded'
                                        {...register('stock')}
                                    />
                                    {
                                        errors.stock &&
                                        <p className='text-red-500 mt-2'>{errors.stock.message}</p>
                                    }
                                </div>
                            </form>
                        </Dialog.Content>
                    </Dialog.Overlay>
                </Dialog.Portal>
            </Dialog.Root>
        )
    }

    return (
        <div className='w-screen min-h-screen p-6 bg-gray-100'>
            <h1 className='text-2xl font-bold mb-4'>Sumber Makmur Dashboard</h1>
            <ProductForm/>
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
