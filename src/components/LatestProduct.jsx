import React from 'react'
import { useState, useEffect } from 'react'
import CardProducts from './CardProducts'
import { API_URL } from '../config'


export default function LatestProduct() {

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
                console.log(response)
                let data = response.slice(0, 2)
                setProducts(data)
                setIsLoading(false)
            })
    }, [])

    return (
        <>
            <div>
                {isLoading ? 'Loading...' : products.map(product => <CardProducts key={product.id} product={product} />)}
            </div>
        </>
    )
}
