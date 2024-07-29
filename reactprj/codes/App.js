import React from 'react'
import Topbn from './Topbn'
import Right from './Right'
import Left from './Left'
import './style.css'
export default function App(){
    return(
        <div className="container">
            <div className="one">
                <Topbn/>
            </div>
            <div className="two">
                <Left/>
            </div>
            <div className="three">
                <Right/>
            </div>
        </div>
    )
}