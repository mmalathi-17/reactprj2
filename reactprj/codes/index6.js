import React from 'react'
import ReactDOM from 'react-dom/client'
//variable
let uid="React"
let year=2898
let students=["malathi","vandana","mahitha","vamsi","naveen"]
let person={
    fname:'prakash',
    lname:'vijay',
    age:21,
    place:"pulivendula"
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
<h1>HELLO KALKI {year}AD</h1>
<h2> year is{year}</h2>
<h3>name is {students}</h3>
<h2>name is{students[4]}</h2>
<h3>{person.fname}
<br/>
age is:{person.age}</h3>


    </>
    )