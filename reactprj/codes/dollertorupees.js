import React from 'react'
import ReactDOM from 'react-dom/client'

var doller= prompt("enter your doller")
var total=doller*80.45
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
<>
<h1 style={{color:'black', backgroundColor: "lightblue",fontFamily:"initial",textAlign:'center'}}>{doller}doller={total}rupees</h1>
    
    </>
    )
