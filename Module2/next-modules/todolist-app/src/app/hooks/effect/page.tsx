import React from 'react'
import CountLayout from '@/components/molecules/count-layout/count-layout.module'
import AddItemLayout from '@/components/molecules/add-item-layout/add-item.module.layout'
import Layout from '@/components/molecules/layout/layout.module'

export default function Effect() {
    return (
        <Layout>
            <div className='flex flex-col justify-center items-center'>
                <CountLayout />
                <AddItemLayout />
            </div>
        </Layout>
    )
}
