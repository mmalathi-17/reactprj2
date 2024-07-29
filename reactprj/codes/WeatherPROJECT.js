import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import'./info.json'
import './style.css'
export default function App() {
  const [state, setState]=useState([])
  const [search, setSearch]=useState({})
  const handler=(e)=>{
    setSearch(e.target.value)
  }
  const Submit=()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=4f35cd18cfc08c920dc8b7719f0a95ca`)
            .then((res)=>{
        //  console.log(res)
          //console.log(res.main)
         setState(res.data.main)
        }
            )}
      return(
    <>
   <h1>weather</h1>
   <h1>Temperature:- {state.temp-273.15}</h1>
   <h1>Humidity:- {state.humidity}</h1>
   <input type='text' placeholder='Enter Your City Name' onChange={handler} />
   <button onClick={Submit}>Get Data</button>
    </>
      )
    }