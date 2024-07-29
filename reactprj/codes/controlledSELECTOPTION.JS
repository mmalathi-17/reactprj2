import React from 'react'
import { useState } from 'react'
export default function App() {
  const [state, setState]=useState("Hello")
  const handler=(x)=>{
    setState(x.target.value)
  }
  return (
    <>
      <h1>controlled components</h1>
      <h3>You Selected <span style={{color: 'red',fontFamily:"sans-serif", fontSize:"50px"}}>{state} </span>course</h3>
      <select onChange={handler}>
        <option>MANGO</option>
        <option>JUICE</option>
        <option>APPLE</option>
        <option>ORANGE</option>
      </select>
    </>
  )
}