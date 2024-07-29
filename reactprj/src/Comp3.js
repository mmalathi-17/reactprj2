import React, {useContext}from 'react'
import {x}from'./App'
export default function Comp3() {
  let a=useContext(x)
  return (
    <div>
      
      <h1>welcome to {a}</h1>
    </div>
  )
}
