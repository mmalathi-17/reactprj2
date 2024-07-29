import React from 'react'
import Data from './info.json'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
export default function Cards(){
    return(
       <>
       <div class="card">
  <div class="card-body">
  
{state.map((x)=>

<>
<img src={x.pic} alt=""/>
<h4>{x.city}</h4>
</>)}
  </div>
</div>
</>
    )
} 