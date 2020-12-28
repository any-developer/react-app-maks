import React from 'react'
import { Link, useHistory} from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { AuhtContext } from '../context/AuhtContext'
import logo from '../images/logo.png'

import M from  'materialize-css/dist/js/materialize.min.js'


export default function Navbar() {

const history = useHistory()
const [ t, i18n ] = useTranslation()
const [ language, setLanguage ] = useState('ru')
const { isAuth, logout } = useContext(AuhtContext)
const handleChange = (e) => {
  setLanguage(e.target.value)
  i18n.changeLanguage(e.target.value)
};

useEffect(() => {
  let sidenav = document.querySelector('#nav-mobile')
  M.Sidenav.init(sidenav, {})
  var elems = document.querySelectorAll('select')
  M.FormSelect.init(elems, {});
})

const logoutHandler = (event) => {
  event.preventDefault()
  logout()
  history.push('/')
}

    return (
      <>

        <nav className="white" role="navigation">
        <div className="nav-wrapper ">
          <Link id="logo-container" to="/" className="brand-logo"><img className="logo" src={logo} /></Link>
          <ul  className="right hide-on-med-and-down">
            <li><Link to="/">{t('nav.home')}</Link></li>
            <li><Link to="/about">{t('nav.about')}</Link></li>
            <li><Link to="/clients">{t('nav.clients')}</Link></li>
            <li><Link to="/products">{t('nav.products')}</Link></li>
            <li><Link to="/news">{t('nav.news')}</Link></li>
            <li><Link to="/contact">{t('nav.contact')}</Link></li>
            {isAuth?<li><Link to="/personal">{t('nav.personal')}</Link></li>:null} 
            {!isAuth?<li><Link to="/singup" className="btn" >{t('nav.signup')}</Link></li>:null} 
            {!isAuth?<li><Link to="/login" className="btn">{t('nav.login')}</Link></li>:null}
            {isAuth?<li><Link to="/" onClick={logoutHandler} className="btn">Logout</Link></li>:null}
            <li>
              <div className="select">
              <select  onChange={handleChange} value={language}>
                  <option  value="ru">RU</option>
                  <option value="en">EN</option>                
              </select>
              </div>
            </li>       
          </ul>
            
          <ul id="nav-mobile" className="sidenav">
            <li><Link to="/">{t('nav.home')}</Link></li>
            <li><Link to="/about">{t('nav.about')}</Link></li>
            <li><Link to="/clients">{t('nav.clients')}</Link></li>
            <li><Link to="/products">{t('nav.products')}</Link></li>
            <li><Link to="/news">{t('nav.news')}</Link></li>
            <li><Link to="/contact">{t('nav.contact')}</Link></li>
            {isAuth?<li><Link to="/personal">{t('nav.personal')}</Link></li>:null} 
            {!isAuth?<li><Link to="/singup" className="btn" >{t('nav.signup')}</Link></li>:null} 
            {!isAuth?<li><Link to="/login" className="btn">{t('nav.login')}</Link></li>:null}
            {isAuth?<li><Link to="/" onClick={logoutHandler} className="btn">Logout</Link></li>:null}
            <li>
            <div className="select-mobile"> 
              <select  onChange={handleChange} value={language}>
                  <option  value="ru">RU</option>
                  <option value="en">EN</option>                 
              </select>
              </div>
            </li>       
          </ul> 
          <Link to="/" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
        </div>
        </nav>
  
      </>
    )
}


 
