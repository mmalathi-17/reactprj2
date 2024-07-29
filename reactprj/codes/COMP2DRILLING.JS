import React from 'react'
import Comp3 from "./Comp3";
export default function Comp2({data1}) {
  return (
    <div>
       <Comp3 data2={data1}/>
    </div>
  )
}