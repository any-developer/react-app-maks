import React from 'react'
import { useState, useEffect } from 'react'
import { API_URL } from '../config'
import CardNews from '../components/CardNews'
import TitleNews from '../components/TitleNews'


export default function NewsPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        fetch(`${API_URL}/posts`,
            {
                metod: 'GET',
                headers: {
                    'Accept': 'Application/json'
                }
            })
            .then(res => res.json())
            .then(response => {
                let data = response.reverse()
                setPosts(data)
                setIsLoading(false)
            })
            // eslint-disable-next-line
    }, [])

    return (
        <>
            <TitleNews />
            <div className="container">
            <div className="row"> 
                {isLoading ? 'Loading...' : posts.map(post => <CardNews key={post.id} post={post} />)}
            </div>
            </div>       
        </>
    )
}