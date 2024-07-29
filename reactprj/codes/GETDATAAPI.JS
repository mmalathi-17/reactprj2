import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import'./info.json'
import '../node_modules/bootstrap/dist/css/bootstrap 
export default function App() {
  const [state, setState]=useState([])
  function handler(){
    axios.get('https://randomuser.me/api/?results=10')
            .then((res)=>{
            // .then(json=>console.log(json))
           setState(res.data.results)
})
  }

  
      return(
    <>
  {state.map((list)=><li>{list.name.first}</li>)}
  <button onClick={handler}>get data</button>
    </>
      )
}