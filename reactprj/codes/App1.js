import React from 'react'
import Topbn from './Topbn'
import Banner from './Banner'
import Cards from './Cards'
import Footer from './Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

export default function App(){
    return(
        <>
        <div className="container">
           
                <Topbn/>
           
                <Banner/>
           
                <Cards/>
              
                <Footer/>
           
        </div>
        </>
    )
}