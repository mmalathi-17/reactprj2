
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
        <div className="container" style={{width:'500px', height:'500px'}}>
            <div className="row" style={{marginTop:'300px'}}>
                <div className="col-md-2" style={{backgroundColor:'blue', textAlign:'center'}}> <svg onClick={increment} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="60" height="60"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></div>
<div className="col-md-8" style={{border:'2px solid black'}}>
      <h1 style={{textAlign:'center'}}>{count}</h1>
      </div>
            <div className="col-md-2"  style={{backgroundColor:'red', textAlign:'center'}}><svg onClick={decrement} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="60" height="60"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg></div>
    </div>
    </div>
        </>
        
        )
        }
export default App