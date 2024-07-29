import React from 'react'
import { useState } from 'react'
import pic from'./hidi.jpg'
export default function App() {
  const [state, setState]=useState(pic)
  const handler=(x)=>{
    setState(x.target.value)
  }
  return (
    <>
      <h1 style={{fontFamily:"revert-layer",color:"skyblue"}}>controlled components</h1>
      <img src={pic}alt='hidi.jpg' style={{width:state, height:"auto"}} />
      <h3>You Selected <span style={{color: 'red',fontFamily:"sans-serif", fontSize:"50px"}}>{state} </span></h3>
      <select onChange={handler}>
        <option>200px</option>
        <option>600px</option>
        <option>500px</option>
        <option>300px</option>
      </select>
    </>
  )
}
 
