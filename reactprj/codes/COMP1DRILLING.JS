import React from 'react'
import Comp2 from './Comp2'
export default function Comp1({data}) {
  return (
    <div>
      <Comp2 data1={data}/>
    </div>
  )
}