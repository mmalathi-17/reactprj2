
import { useState } from "react";
import'./style.css'
function App(){
const person={
  fname:"malathi",
 lname:"kasi"
}
const person2={
  fname:"dheeraj",
  lname:"punith"
}
const [state, setState]=useState(person)
const Update=()=>{
   setState(state.fname==='malathi' ? person2:person)
}
  return(
    <>
    <h3>first name is 
      <span className="txt">{state.fname} and last name is {state.lname}</span>
      </h3>
      <button onClick={Update}>update</button>
   
    </>
  )
}

export default App
