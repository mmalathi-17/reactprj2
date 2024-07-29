import React from 'react'
import ReactDOM from 'react-dom/client'

if(4<5){
    alert("4 is less than 5")
   // message="true 4 is less than 5"
}
else{
    alert("4 is not less than")
    //message="false 4 is not less than 5"
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
<h1>if else</h1>
    </>
    )