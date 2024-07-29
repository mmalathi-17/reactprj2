import React from 'react'
import{useState}from 'react'
function App(){

    const[state,setState]=useState('MALATHI')
    const handler=()=>{
        setState("NAVEEN")
    }
  return (
      <>
     <h3>click event</h3>
     <h2>{state}</h2>
     <button onClick={handler}>clickme</button>
      </>
  )
}
 export default App