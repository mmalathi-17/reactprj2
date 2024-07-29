import React from 'react'
import pic from './MicrosoftTeams-image.png'
const a={
    padding:'10px'
}
export default function Comp2() {
    return (
        <>
        <div className='container'>
                <div className='row '>
                    <div className='col-md-8 pt-5'>
                        <h1 style={{fontFamily:"sans-serif"}}>WORKOUT MADE</h1>
                        <h1 style={{fontFamily:"sans-serif"}}><span style={{color:"lightgreen",fontFamily:'sans-serif'}}>EXCLUSIVE</span>  FOR YOU!</h1>
                        <br></br>
                     <p> we create <b>exclusive and unique workouts for you .</b><br/>invest in ur body and get much more performance <br/>and quality of life</p>
                        <button style={{backgroundColor:"green",fontFamily:"inherit", border:"10px",padding: "15px",color:"white",margin:"30px"}}>Start Now</button>
                    </div>
                    <div className='col-md-4 p-4'>
                        <img src={pic} alt=''/>
                    </div>
                </div>
                </div>
                <div className='container text-center'>
                     <h2 style={{fontFamily:"initial"}}>send us a message @treine.me</h2>
                </div>
        </>
    )
}
 


