import React from 'react'
import pic1 from './oip2.jpg'
import pic2 from './oip2.jpg'
import pic3 from './oip2.jpg'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
export default function Banner(){
    return(
       <>
    <div className='container'>
        <div className='row'>
        <div className='col-md-12'>
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={pic1}class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={pic2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={pic3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
</div>
       </>
    )
}