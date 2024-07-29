import React from 'react'
import pic from './hidi.jpg'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
export default function Cards(){
    return(
       <>
      
<div className='container'>
        <div className='row'>
<div className='col-md-4'>
<div class="card">
  <img src={pic} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">PRICE 500</h5>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
<div className='col-md-4'>
<div class="card" >
  <img src={pic} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href=
    "#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
</div>
<div className='col-md-4'>
<div class="card">
  <img src={pic} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
</div>
</div>

       </>
    )
} 