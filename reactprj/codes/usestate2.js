import React from 'react'
import { useState } from 'react'
function App(){
 // let uid="mouritech"
  const person={
  name:'naveen',
  place:"pulivendula",
  age:23
  } 
  const students=['naveen','kiran']
   //const [state,setState]=useState('Malathi')
   const [state,setName]=useState(students)
   
    return(
      <>
    <h3> react hooks</h3>
<h2>use state </h2>
{/*<h1>{state}</h1>

    <h3>{state.[0]}</h3>*/}
<h1>{state[0]}</h1>
<h1>{person.name}</h1>
</>
    )
  }
  export default App
    