import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
function App(props){

    return(
        <>
        <div className='container'>
        <div className='row'>
<div className='col-md-4'>
<div class="card">
  <div class="card-body">
  <img src={props.pic1} class="card-img-top" alt="..."/>
  <h2>price {props.price}</h2>
  </div>
</div>
</div>
<div className='col-md-4'>
<div class="card" >
  <div class="card-body">
  <img src={props.pic2} class="card-img-top" alt="..."/>
  <h2>price {props.price}</h2>
  </div>
  </div>
</div>
<div className='col-md-4'>
<div class="card" >
  <div class="card-body">
  <img src={props.pic3} class="card-img-top" alt="..."/>
  <h2>price {props.price}</h2>
  </div>
  </div>
</div>
</div>
</div>
   
   
    
        
        </>
    )
}
export default App