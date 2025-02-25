import React from 'react'
import Layout from '@/components/molecules/layout/layout.module'
import ProductCounter from '@/components/molecules/product-counter/product-counter.module'

export default function Reducer() {
    return (
        <Layout>
            <div className='w-screen h-full flex justify-center items-center'>
                <ProductCounter />
            </div>
        </Layout>
    )
}
