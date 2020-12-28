import React from 'react'
import {useEffect} from 'react'
import { useTranslation } from 'react-i18next'
import M from  'materialize-css/dist/js/materialize.min.js'
import bg1 from '../images/bg1.png'


export default function TitleNews() {

    const [ t ] = useTranslation();

    useEffect(() => {
        let parallax = document.querySelector('#parallax3')
        M.Parallax.init(parallax, {})
      },[])

    return (
        <div className="title">
        <div  className="parallax-container valign-wrapper">
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row ">
              <div className="wraper-title ">
                <h2 className="header col s12 light">{t('titleNews.news')}</h2>
              </div>
            </div>
          </div>
        </div>
        <div  id ="parallax3" className="parallax"><img src={bg1} alt="Unsplashed background img 2" /></div>
      </div>
      </div>
    )
}