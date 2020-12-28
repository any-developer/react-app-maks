import React from 'react'
import {Link} from 'react-router-dom'
import { API_URL } from '../config'
import { useTranslation } from 'react-i18next'

export default function CardNews({post}) {

    const [ t ] = useTranslation()
    const locale = t('locale')

    return (
                <div className="col s12 m6 ">
                    <div className="card large">                    
                        <div className="card-image">
                             <img src={`${API_URL}` + post[`postImage_${locale}`].formats.small.url} alt="alt"/>                             
                        </div>
                        <div className="card-content">
                            <h2 className="card-title">{post[`postTitle_${locale}`]}</h2>
                             <p>{post[`postDescription_${locale}`].substr(0, 100)}...</p>
                        </div>
                        <div className="card-action">
                            <Link className="deep-purple-text text-darken-1" to={`/post/${post.id}`}>{t('news.detail')}</Link>
                        </div>
                    </div>
                </div>       
    )
}
