import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { API_URL } from '../config'


export default function CardProducts({ product }) {
    
    const [ t ] = useTranslation()
    const locale = t('locale')
    const listOne = product[`productDescriptionListOne_${locale}`].split('\n-').splice(1)   
    const listTwo = product[`productsDescriptionListTwo_${locale}`].split('\n-').splice(1)
   

    return (
        <div className="container">
            <div className="col s12 m7">
                <div className="card product-card">
                    <div className="card-product-header">
                        <div className="card-product-header-item">
                            <h2>{product[`productTitle_${locale}`]}</h2>
                        </div>
                        <div className="card-product-header-item">
                            <p>{product[`productDescription_${locale}`]}</p>
                        </div>
                    </div>
                    <div className="card-product-content">
                        <div className="card-product-content-item">
                            <div className="card-product-image">
                                <img src={`${API_URL}` + product[`productImage_${locale}`].formats.small.url} alt="alt" />
                            </div>
                        </div>
                        <div className="card-product-content-item">
                            <ul>
                                {listOne.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                        <div className="card-product-content-item">
                            <ul>
                                {listTwo.map((item, i) => <li key={i}><i className="material-icons">done</i>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="card-action ">
                        <Link className="deep-purple-text text-darken-1" to={`/product/${product.id}`}>{t('products.detail')}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
