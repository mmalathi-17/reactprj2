import React, { useState } from 'react'
import Data from './info.json'
export default function App() {
  const [state, setState]=useState(Data)
  const[search,setSearch]=useState()
  const handler=(e)=>{setSearch(e.target.value)
  }
  return (
    <>
  <input type='text' placeholder='search' value={search}  onChange={handler}/>
  {state.filter((x)=>x.city.includes(search)).map((item)=><li>{item.city}</li>)}
    </>
  )
}