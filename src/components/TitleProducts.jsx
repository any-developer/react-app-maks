import React from 'react'
import {useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import M from  'materialize-css/dist/js/materialize.min.js'
import bg1 from '../images/bg1.png'

export default function TitleProducts() {

    const [ t ] = useTranslation();

    useEffect(() => {
        let parallax = document.querySelector('#parallax2')
        M.Parallax.init(parallax, {})
      },[])

    return (
        <div className="title">
        <div  className="parallax-container valign-wrapper">
        <div className="section no-pad-bot">
          <div className="container">
            <div className="rowr">
            <div className="wraper-title">     
              <h2 className="header col s12 light">{t('titleProducts.products')}</h2>
            </div>  
            </div>
          </div>
        </div>
        <div  id ="parallax2" className="parallax"><img src={bg1} alt="Unsplashed background img 2" /></div>
      </div>
      </div>
    )
}
 