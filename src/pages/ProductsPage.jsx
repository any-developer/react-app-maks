import React from 'react'
import { useState, useEffect } from 'react'
import { API_URL } from '../config'
import CardProducts from '../components/CardProducts'
import TitleProducts from '../components/TitleProducts'

export default function ProductsPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState(null)

    useEffect(() => {
        fetch(`${API_URL}/products`,
            {
                metod: 'GET',
                headers: {
                    'Accept': 'Application/json'
                }
            })
            .then(res => res.json())
            .then(response => {
                let data = response
                setProducts(data)
                setIsLoading(false)

            })

    }, [])

    return (
        <div>
            <TitleProducts />
            {isLoading ? 'Loading...' : products.map(product => <CardProducts key={product.id} product={product} />)}
        </div>
    )
}
