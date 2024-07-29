import React from 'react'
import ReactDOM from 'react-dom/client'
import uid,{course,duration,demo}from'./mode.js'

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
<>

<h1>Exporting and Importing</h1>
<h2>{uid}</h2>
<h3>{course}</h3>
<h3>{duration}</h3>
<h3>{demo()}</h3>
 </>
)



