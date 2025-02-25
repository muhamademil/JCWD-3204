import React from 'react'
import Layout from '@/components/molecules/layout/layout.module'
import CountLayout from '@/components/molecules/count-layout/count-layout.module'

export default function Callback() {
    return (
        <Layout>
            <div className='flex flex-col justify-center items-center'>
                <CountLayout />
            </div>
        </Layout>
    )
}
