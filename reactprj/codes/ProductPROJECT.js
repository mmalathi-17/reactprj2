import React, { useEffect } from 'react'
import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import './style.css'
export default function App() {
const [state, setState]=useState([])
const[search,setSearch]=useState()
  const handler=(e)=>{
    setSearch(e.target.value)
  }
useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            // .then(json=>console.log(json))
            .then(json=>setState(json))
})
      return(
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" style={{background:"pink",fontFamily:"revert"}} >
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav" style={{marginLeft:'700px'}}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">AboutUs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Check Bmi</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Api
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">products</a></li>
            <li><a className="dropdown-item" href="#">Movie</a></li>
            <li><a className="dropdown-item" href="#">Food</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <input type='text' placeholder='search' value={search}style={{width:'100%'}}  onChange={handler}/>
  
    <div className='container'>
    <div className='row'>
  
    {state.filter((x)=>x.title.includes(search)).map((item)=>
    <div className='col-md-4'>
    <div className="card">
  <img src={item.image} width="300px" height="500px"/>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  </div>
</div>
 )}
  </div>
</div>

    </>
      )
}


 
