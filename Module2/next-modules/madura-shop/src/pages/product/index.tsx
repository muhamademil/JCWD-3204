import React from 'react'
import Layout from '@/components/layout/layout.module'
import Card from '@/components/card/card.module'

import { data, DataProduct } from '@/dummy/data'

export default function Product() {
    return (
        <Layout>
            <div className='grid grid-cols-3 gap-5 p-5'>
                {
                    data.map((item: DataProduct) => {
                        return (
                            <Card
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                price={item.price}
                                category={item.category}
                            />
                        )
                    })
                }
            </div>
        </Layout>
    )
}
