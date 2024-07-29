import { useState } from "react"
 import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './style.css'
import pic from './src/hidi.jpg'
function App(){
const [state,setState]=useState('txt')
const update=()=>{
 if(state=='txt'){
  setState('txt1')
 }else{
  setState('txt')
 }
 
}
return(
  <> 
  <img src={pic} className={state}/>
    <button onClick={update}>update</button>
    </>
           )
           }
   export default App
    
    