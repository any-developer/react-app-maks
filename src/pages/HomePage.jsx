import React from 'react'
import Header from '../components/Header'
import LatestProduct from '../components/LatestProduct'
import TitleProducts from '../components/TitleProducts'
import TitleNews from '../components/TitleNews'
import Footer from '../components/Footer'
import LatestNews from '../components/LatestNews'
import { HomeDescription } from '../components/HomeDescription'

export default function HomePage() {
    return (
        <div>
            <Header />
            <HomeDescription />
            <TitleProducts />
            <LatestProduct /> 
            <TitleNews />
            <LatestNews />          
            <Footer />    
        </div>
    )
}
