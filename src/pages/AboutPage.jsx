import React, { useEffect, useState} from 'react'
import { useTranslation } from 'react-i18next'
import { Licenses } from '../components/Licenses';
import TitleAbout from '../components/TitleAbout'
import { API_URL } from '../config'

export default function AboutPage() {

    const [t] = useTranslation();
    const locale = t('locale')
    const [abouts, setAbouts] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        fetch(`${API_URL}/about`,
            {
                metod: 'GET',
                headers: {
                    'Accept': 'Application/json'
                }
            })
            .then(res => res.json())
            .then(response => {
                setAbouts(response)
                setIsLoading(false)
            })
            // eslint-disable-next-line
    }, [])

    if (isLoading) {
        return 'Loader...'
    }
    return (
        <div >
            <TitleAbout />

            <div className="container mt-1">
                <div className="row">
                    <div className="col s3">
                        <div className="year">
                        <h3>1991</h3>
                        <p>{t('about.year')}</p>
                        </div>
                    </div>
                    <div className="col s9">
                    {abouts[`aboutDescriptionHeader_${locale}`].split('\n').map((item, i) => <p key={i}>{item}</p>)}
                    </div>
                </div>

                <div className="row about">
                    <div className="col s5">
                    {abouts[`aboutLeftOne_${locale}`].split('\n').map((item, i) => <p key={i}>{item}</p>)}
                    </div>
                    <div className="col s7">
                        <ul>
                        {abouts[`aboutRightOne_${locale}`].split('\n-').splice(1).map((item, i)=> <li key={i}><i className="material-icons">done</i>{item}</li>)}
                        </ul>
                    </div>
                </div>

                <div className="row about">
                    <div className="col s5">
                         {abouts[`aboutLeftTwo_${locale}`].split('\n').map((item, i) => <p key={i}>{item}</p>)}
                    </div>
                    <div className="col s7">
                        <ul>
                        {abouts[`aboutRightTwo_${locale}`].split('\n-').splice(1).map((item, i) => <li key={i}><i className="material-icons">done</i>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="section-grey" >
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h2>{t('about.lisenses')}</h2>
                            <div className='mt-1'>
                                <Licenses />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col s12">
                    {abouts[`aboutDescriptionBottom_${locale}`].split('\n').map((item, i) => <p key={i}>{item}</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
