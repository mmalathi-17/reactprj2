import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import'./info.json'
export default function App() {
  const [state, setState]=useState()
  const [search, setSearch]=useState()
  const handler=(e)=>{
    setSearch(e.target.value)
  }
  const Submit=()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=4f35cd18cfc08c920dc8b7719f0a95ca`)
            .then((res)=>{
        //  console.log(res)
          //console.log(res.main)
         setState(res.data.main.temp-273.15)
})

  };
      return(
    <>
    <h1>temperature</h1>
   
      <input type='text' value={search} onChange={handler}/>
     <br/>
     <button onClick={Submit}>Submit</button>

      {state && <p> temp: {state}</p>}

    </>
      )
    }