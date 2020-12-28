import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { API_URL } from '../config'
import { useTranslation } from 'react-i18next'



export default function ProductPage() {
    
    const history = useHistory()
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState()
    const [ t ] = useTranslation()
    const locale = t('locale')

    useEffect(() => {

        fetch(`${API_URL}/products/${id}`,
            {
                metod: 'GET',
                headers: {
                    'Accept': 'Application/json'
                }
            })
            .then(res => res.json())
            .then(response => {
                console.log(response)
                setProducts(response)
                setIsLoading(false)
            })
            // eslint-disable-next-line
    }, [])
    
    return (
        <>
            {isLoading ? <p>'Loading...'</p> :
                <div className="product">
                    <section className="section-grey">
                        <div className="container">
                            <div className="row ">
                                <div className="col s12 m6">
                                    <h1>{products[`productTitle_${locale}`]}</h1>
                                    {products[`productDescription_${locale}`].split('\n').map(item => <p key={item.toString()}>{item}</p>)}
                                </div>
                                <div className="col s12 m6">
                                    <img src={`${API_URL}` + products[`productImage_${locale}`].formats.small.url} alt="" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="container">
                            <div className="row mt-1">
                                <div className="col s12">
                                    <h2>{t('product.mainfunctions')}</h2>
                                </div>
                                <div className="col s12 m6">
                                    <ul> {products[`productMainFunctions_${locale}`].split('\n-').splice(1).splice(0, Math.round(products[`productMainFunctions_${locale}`].split('-').splice(1).length / 2 - 1)).map(item => <li key={item.toString()}><i className="material-icons">done</i>{item}</li>)} </ul>
                                </div>
                                <div className="col s12 m6">
                                    <ul> {products[`productMainFunctions_${locale}`].split('\n-').splice(1).splice(Math.round(products[`productMainFunctions_${locale}`].split('-').splice(1).length / 2 - 1)).map(item => <li key={item.toString()}><i className="material-icons">done</i>{item}</li>)} </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-grey">
                        <div className="container">
                            <div className="row mt-1">
                                <div className="col s12">
                                    <h2>{t('product.purpose')}</h2>
                                </div>
                                <div className="col s12">
                                    <p>{products[`productUse_${locale}`]}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="container">
                            <div className="row mt-1 documentation">
                                <div className="col s12">
                                    <h2>{t('product.documentation')}</h2>
                                </div>
                                <div className="col s12 m6">
                                    <ul>
                                        {products[`documentation_${locale}`].slice(0, Math.round(products[`documentation_${locale}`].length / 2)).map(item => <li key={item.id}>{<a href={`${API_URL}`+ item.url} target="blank"><i className="material-icons">picture_as_pdf</i>{item.name}</a>}</li>)}
                                    </ul>
                                </div>
                                <div className="col s12 m6">
                                    <ul>
                                        {products[`documentation_${locale}`].slice(Math.round(products[`documentation_${locale}`].length / 2)).map(item => <li key={item.id}>{<a href={`${API_URL}`+ item.url} target="blank"><i className="material-icons">picture_as_pdf</i>{item.name}</a>}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-grey">
                        <div className="container">                          
                                <div className="back">                               
                                <button className="btn deep-purple darken-1 "  onClick={history.goBack}>Back</button>
                                </div>                           
                        </div>
                    </section>

                </div>
            }
        </>
    )
}
