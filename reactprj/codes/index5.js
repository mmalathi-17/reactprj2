import React from 'react'
import ReactDOM from 'react-dom/client'
//variable
let uid="react"
let year=2024
let name="malathi"
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
<h1>hello{uid}</h1>
<h2> year is{year}</h2>
<h3>name is {name}</h3>
    </>
    )