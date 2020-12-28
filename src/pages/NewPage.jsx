import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { API_URL } from '../config'
import { useTranslation } from 'react-i18next'


export default function NewPage() {

    const history = useHistory()
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState()
    const [t] = useTranslation()
    const locale = t('locale')

    useEffect(() => {
        console.log(id)
        fetch(`${API_URL}/posts/${id}`,
            {
                metod: 'GET',
                headers: {
                    'Accept': 'Application/json'
                }
            })
            .then(res => res.json())
            .then(response => {
                setPosts(response)
                setIsLoading(false)
            })
             // eslint-disable-next-line
    }, [])

    if (isLoading) {
        return 'Loading...'
    }
    return (
        <>
            <div className="container">
                <div className="row mt-1">
                    <div className="col s12">
                        {<img className="news-page-image" src={`${API_URL}` + posts[`postImage_${locale}`].formats.small.url} alt="alt" />}
                    </div>
                    <div className="col s12">
                        {<h1>{posts[`postTitle_${locale}`]}</h1>}
                        {posts[`postDescription_${locale}`].split('\n').map((item, i) => <p key={i}>{item}</p>)}
                    </div>
                </div>
            </div>
            <section className="section-grey">
                <div className="container">
                    <div className="back">
                        <button className="btn deep-purple darken-1 " onClick={history.goBack}>Back</button>
                    </div>
                </div>
            </section>
        </>
    )
}
