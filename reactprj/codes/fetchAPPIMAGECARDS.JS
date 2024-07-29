import React, { useEffect } from 'react'
import { useState } from 'react'
import './info.json'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
export default function App() {
const [state, setState]=useState([])
useEffect(()=>{
  fetch('https://randomuser.me/api/?results=10')
            .then(res=>res.json())
            // .then(json=>console.log(json))
            .then(json => setState(json.results))
})
      return(
    <>
    <div className='container'>
    <div className='row'>
    {state.map((result)=>
 
    <div className='col-md-4'>
    <div class="card">
  <img src={result.picture.medium}/>
  <div class="card-body">
  <h5 class="card-title">{result.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
</div>
 )}
  </div>
</div>
    </>
      )
}