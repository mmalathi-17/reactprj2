import React from 'react'
import ReactDOM from 'react-dom/client'
import pic from'./hidi.jpg'
const clr={
    color:'red'
}
const p={
    width:"200px",
    border:'20px solid  black'

}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
<h1 style={(clr)}>css</h1>
<h2 style={{color:'green'}}>one more method</h2>
<img src={pic}alt='hidi.jpg' style={(p)}/>
<br/>
<img src='logo192.png'alt=""/>
    </>
    )