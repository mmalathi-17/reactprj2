import  React from "react"

 function App() {
    const info=[
        {
name:"ajay",
place:"hyderabad"
    },
    {
        name:"malathi",
        place:"USA"
    }]  
    return(
        <>
     {info.map((x)=><li>{x.name},{x.place}</li>)}
        
        </>
        
    )
}
export default App