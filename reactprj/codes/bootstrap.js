import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import pic from'./hidi.jpg'
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
<>

<h1 className='text-danger'>Bootstrap</h1>
<button className='btn btn-success'>click</button>
<img src={pic} alt=""className='img-fluid'/>

 </>
)



