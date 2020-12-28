import React from 'react'
// import {Link} from 'react-router-dom'
import { API_URL } from '../config'
import { useTranslation } from 'react-i18next'

export default function CardClients({client}) {

    const [ t ] = useTranslation()
    const locale = t('locale')
    return (
                <div className="col s6 m6 l4">
                    <div className="card medium">                    
                        <div className="card-image">
                             <img src={`${API_URL}` + client[`clientImage_${locale}`].formats.small.url} alt="alt"/>                             
                        </div>
                        <div className="card-content">
                            <p>{client[`clientTitle_${locale}`]}</p>
                             {/* <p>{client[`clientDescription_${locale}`].substr(0, 100)}...</p> */}
                        </div>
                    </div>
                </div>       
    )
}