import React from 'react'
import ReactDOM from 'react-dom/client'
let message
let marks=prompt("enter your marks")
if(marks<35){
   // alert("")
 message="fail"
}
else{
   // alert("4 is not less than")
    message="pass"
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
<h1>if else</h1>
<h2>{message}</h2>
    </>
    )