import React from 'react'
import {useEffect} from 'react'
import { useTranslation } from 'react-i18next'
import M from  'materialize-css/dist/js/materialize.min.js'
import bg1 from '../images/bg1.png'

export default function Header() {

    const [ t ] = useTranslation()

    useEffect(() => {
        let parallax = document.querySelector('#parallax')
        M.Parallax.init(parallax, {})
      },[])

    return (
    <div className="header">
    <div id="index-banner" className="parallax-container valign-wrapper">
    {/* <div className="section no-pad-bot"> */}
      <div className="container">  
          <div className="row center"> 
            <h1 className="header">{t('header.title')}</h1>       
            <h5 className="header col s12 light">{t('header.subtitle')}</h5>
        </div>
      </div>
    {/* </div> */}
    <div id="parallax" className="parallax"><img src={bg1} alt="Unsplashed background img 1" /></div>
  </div>
  </div>
    )
}
