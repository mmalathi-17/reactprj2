import React from 'react'
import ReactDOM from 'react-dom/client'
import pic from'./hidi.jpg'
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
<h1>INSTERING IMAGE</h1>
<img src={pic}alt='hidi.jpg'/>
    </>
    )