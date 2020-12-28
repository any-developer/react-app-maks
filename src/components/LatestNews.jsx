import React from 'react'
import { useState, useEffect } from 'react'
import CardNews from './CardNews'

export default function LatestNews() {

    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        fetch('http://localhost:1337/posts',
            {
                metod: 'GET',
                headers: {
                    'Accept': 'Application/json'
                }
            })
            .then(res => res.json())
            .then(response => {
                let data = response.reverse().slice(0, 2)
                setPosts(data)
                setIsLoading(false)
            })
    }, [])

    return (
        <>    
            <div className="container">
            <div className="row"> 
                {isLoading ? 'Loading...' : posts.map(post => <CardNews key={post.id} post={post} />)}
            </div>
            </div>       
        </>
    )
}