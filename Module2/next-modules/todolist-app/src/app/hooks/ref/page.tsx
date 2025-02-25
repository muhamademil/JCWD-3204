import React from 'react'
import CountLayout from '@/components/molecules/count-layout/count-layout.module'
import Layout from '@/components/molecules/layout/layout.module'

export default function Ref() {
    return (
        <Layout>
            <div className='flex flex-col justify-center items-center'>
                <CountLayout />
            </div>

        </Layout>
    )
}
