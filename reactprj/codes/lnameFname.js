
import React ,{ useState } from "react";
import'./style.css'
function App(){
const person={
  fname:"malathi",
  lname:"naveen",
  age:22
}
const [state,setState]=useState(person)
const update=()=>{
    
  if(fname=="vandana")
    setState(person)

  return(
    <>
    <h3>first name is 
      <span className="txt">{state.fname}</span>
       and last name is{state.lname}
       </h3>
      <button onClick={update}>update</button>
   
    </>
  )
 
  
}
export default App



