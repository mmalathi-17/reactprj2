import { useState } from "react"

export default function App() {
    const num=[1,2,3,4,5,6,]
        
   const[data,setData]= useState(num)
    return(
        <>
         
      <h2>App</h2>
      {data.map((val)=><li>{val}</li>)}
        
        </>
        
    )
}
