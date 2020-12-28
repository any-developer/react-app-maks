import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { API_URL } from '../config'


export const HomeDescription = ()  => {

  const [ t ] = useTranslation()
  const locale = t('locale')
  const [isLoading, setIsLoading] = useState(true)
  const [description, setDescription] = useState(null)

  useEffect(() => {
    fetch(`${API_URL}/home-description`,
        {
            metod: 'GET',
            headers: {
                'Accept': 'Application/json'
            }
        })
        .then(res => res.json())
        .then(response => {
            console.log(response)
            let data = response
            setDescription(data)
            setIsLoading(false)
        })
}, [])

if (isLoading) {
  return 'Loader...'
}
    return (
        <div className="container">
        <div className="section">
        <h1 className="deep-purple-text text-darken-1">{description[`homeTitle_${locale}`]}</h1>
        <p>{description[`homeDescription_${locale}`]}</p>         
          <div className="row">
            <div className="col s12 m4">             
            <ul> {description[`homeColLeft_${locale}`].split('-').map((item, i) => <li key={i}>{item}</li>)} </ul>             
            </div>    
            <div className="col s12 m4">
            <ul> {description[`homeColCenter_${locale}`].split('-').map((item, i) => <li key={i}>{item}</li>)} </ul>
            </div>   
            <div className="col s12 m4">
            <ul> {description[`homeColRight_${locale}`].split('-').splice(1).map((item, i) => <li key={i}>{item}</li>)} </ul>  
            </div>    
          </div>    
        </div>
      </div>
    )
}
