import React, { useEffect } from 'react'
import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
export default function App() {
const [state, setState]=useState([])
useEffect(()=>{
    fetch('https://randomuser.me/api/?results=20')
    .then(res=>res.json())
    //.then(json=>console.log(json.results))
    .then((json)=>setState(json.results))
})

      return(
    <>
    {state.map((x)=><li>{x.name.first}</li>)}

    </>
      )
}