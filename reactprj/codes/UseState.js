import React from 'react'
import { useState } from 'react'
function App(){
   const [state,setState]=useState('Malathi')
   const [name,setName]=useState('kiran')
    return(
      <>
    <h3> react hooks</h3>
<h2>use state </h2>
<h1>{state}</h1>
<h2>{name}</h2>
</>
    )
  }
  export default App