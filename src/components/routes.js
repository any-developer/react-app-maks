import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ClientsPage from '../pages/ClientsPage'
import ProductsPage from '../pages/ProductsPage'
import NewsPage from '../pages/NewsPage'
import ContactPage from '../pages/ContactPage'
import PersonalPage from '../pages/PersonalPage'
import ProductPage from '../pages/ProductPage'
import NewPage from '../pages/NewPage'
import { Login } from '../pages/Login'
import { SingUp } from '../pages/SingUp'

export const useRoutes = (isAutch) => {
    if (isAutch){
    return (
        <Switch>
          <Route component={HomePage} path='/' exact />
          <Route component={AboutPage} path='/about'  exact/>
          <Route component={ClientsPage} path='/clients'  exact/>
          <Route component={ProductsPage} path='/products'  exact/>
          <Route component={NewsPage} path='/news'  exact/>
          <Route component={ContactPage} path='/contact'  exact/>
          <Route component={PersonalPage} path='/personal'  exact />
          <Route component={ProductPage} path='/product/:id' />
          <Route component={NewPage} path='/post/:id' />
          {/* <Route component={Login} path='/login'  exact/>
          <Route component={SingUp} path='/singup'  exact/> */}
          {/* <Redirect to ='/' /> */}
        </Switch> 
    )
    }
    return (
        <Switch>
          <Route component={HomePage} path='/' exact />
          <Route component={AboutPage} path='/about'  exact />
          <Route component={ClientsPage} path='/clients'  exact/>
          <Route component={ProductsPage} path='/products' exact />
          <Route component={NewsPage} path='/news' exact />
          <Route component={ContactPage} path='/contact'  exact/>
          <Route component={ProductPage} path='/product/:id' />
          <Route component={NewPage} path='/post/:id' />
          <Route component={Login} path='/login'  exact/>
          <Route component={SingUp} path='/singup'  exact/>
          {/* <Redirect to = '/' /> */}
        </Switch> 
    )
}
