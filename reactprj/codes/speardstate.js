
import { useState } from "react";
import'./style.css'
function App(){
const person={
  fname:"malathi",
}
const person2={
  fname:"dheeraj",
}
const [state, setState]=useState(person)
const Update=()=>{
  setState({...state,fname:'dheeraj'})
   
}
  return(
    <>
    <h3>first name is <span className="txt"> {state.fname}</span>
      </h3>
      <button onClick={Update}>update</button>
   
    </>
  )
}

export default App
