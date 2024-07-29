import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import'./info.json'
export default function App() {
  const [state, setState]=useState([])

    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=4f35cd18cfc08c920dc8b7719f0a95ca')
            .then((res)=>{
        //  console.log(res)
          //console.log(res.main)
         setState(res.data.main.temp-273.15)
})



      return(
    <>
    <h1>Hyderabad</h1>
  {state}

    </>
      )
}