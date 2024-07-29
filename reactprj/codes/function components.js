import React from 'react'
import ReactDOM from 'react-dom/client'
//component
function Comp(){
return<h3>hello java</h3>
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
<>

            <h1>hello </h1>
<Comp/>
<Comp/>
<Comp/>
        </>
)


