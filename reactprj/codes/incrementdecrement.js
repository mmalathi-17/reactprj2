
import { useState } from "react"

import '../node_modules/bootstrap/dist/css/bootstrap.css'
function App(){
const [count, setCount]=useState(0)
    const increment = () => {
        setCount(count+1);
      };
    
      const decrement = () => {
        setCount(count-1);
      };
return(
        <>
        <div className="container">
            <div className="row" style={{marginTop:'300px'}}>
                <div className="col-md-2" style={{backgroundColor:'blue', textAlign:'center'}}> <svg onClick={increment} xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
</svg></div>
<div className="col-md-8" style={{border:'2px solid black'}}>
      <h1 style={{textAlign:'center'}}>{count}</h1>
      </div>
            <div className="col-md-2"  style={{backgroundColor:'red', textAlign:'center'}}><svg onClick={decrement} xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg></div>
    </div>
    </div>
        </>
        
        )
        }
export default App