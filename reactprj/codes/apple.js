import React from 'react'
import Comp1 from './Comp1'
import './style.css'
export default function App({}) {

  const id = ["Apple","Bannana","Cherry","pineapple"]
 
  return (
    <div> 
     <Comp1 data={id.map((x)=><li>{x}</li>)}/>
    </div>
  )
}