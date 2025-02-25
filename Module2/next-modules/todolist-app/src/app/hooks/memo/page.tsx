import React from 'react'
import Layout from '@/components/molecules/layout/layout.module'
import ShoppingCart from '@/components/molecules/shopping-cart/shopping-cart.module'

export default function Memo() {
    return (
        <Layout>
            <div className='flex flex-col justify-center items-center'>
                <ShoppingCart />
            </div>
        </Layout>
    )
}
