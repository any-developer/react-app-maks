import React from 'react'
import {useState, useEffect} from 'react'


export default function Products() {

    
 const [isLoading, setIsLoading] = useState(true)
 const [products, setProducts] = useState(null)

 useEffect(() => {
    fetch('http://localhost:1337/products',
    {
        metod: 'GET',
        headers: {
            'Accept': 'Application/json'
        }
    })
    .then(res => res.json())
    .then(response => {
           let data = response.slice(0, 2)
           console.log(data)
           setProducts(data)
           setIsLoading(false)
           
    })
       
 }, [])

    return (
        <div>
            <p>Products</p>
            {isLoading? 'Loading...': products.map(post => <p>{post.productsName}</p>)}
        </div>
    )
}
