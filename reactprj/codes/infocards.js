
import { useState } from "react"
import Data from './info.json'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
function App(){
    const [state,setState]=useState(Data)
return(
        <>
       <div className="container-fluid">
        <div className="row">
            {state.map((x)=>
            <div className="col-md-4">
        <div className="card">
            <img src={x.pic}/>
     <div className="card-body">
        <div className="card-title" style={{color:"red"}}>{x.city}</div>
     </div>
        </div>
        </div>
        )}
        </div>
        </div>
        
        </>
        
        )
        }
export default App