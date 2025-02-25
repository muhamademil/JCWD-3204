import React from 'react'
import Layout from '@/components/molecules/layout/layout.module'
import CountLayout from '@/components/molecules/count-layout/count-layout.module'
import ToggleLayout from '@/components/molecules/toggle-layout/toggle-layout.module'

export default function State() {
    return (
        <Layout>
            <div className='flex flex-col justify-center items-center'>
                <CountLayout />
                <ToggleLayout />
            </div>
        </Layout>
    )
}
