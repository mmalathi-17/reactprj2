import React from 'react'
import ReactDOM from 'react-dom/client'
let message
let w=prompt('weight')
let h=prompt('height')
 let bmi= w*10000/(h*h);
 if(bmi <=18.5){
 message="Under Weight"
}else if(bmi>=18.5 && bmi<=25){
message="Normal"
 }else if(bmi>=25 && bmi<=30){
message="Over Weight"
}
else{
 message=" Obesity"
 }
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
<>
<h1 style={{color:'black', backgroundColor: "lightblue",fontFamily:"initial",textAlign:"center",border:"5px solid black" }}>{message}</h1>
    <h1 style={{color:'black', backgroundColor: "pink",fontFamily:"initial",textAlign:"center"}}>{bmi}</h1>
 </>
)
    