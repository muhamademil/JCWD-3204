import React from 'react'
import Menu from '@/components/molecules/menu/menu.module'
import Layout from '@/components/molecules/layout/layout.module'

export default function LandingPage() {
  return (
    <Layout>
      <div className='w-screen h-screen'>
        <Menu />
      </div>
    </Layout>
  )
}
