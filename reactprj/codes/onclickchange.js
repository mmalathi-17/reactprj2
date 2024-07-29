import React from "react";
import { useState } from "react";
 
function App() {
  const [state, setState] = useState(["a", "b","c"]);
 
  const demo = () => {
   
    setState([1,2,3])
  }
 
  return (
    <>
      <h1>click event</h1>
      <h3>{state}</h3>
      <button onClick={demo}>click here</button>
    </>
  )
}
 
export default App
 