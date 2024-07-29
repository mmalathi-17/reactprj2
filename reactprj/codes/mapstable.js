export default function App() {
    const city=['hyderabad','banglore','pulivendula','usa','godavari']
        
    
    return(
        <>
         
       <table border="5px">
        <h1 style={{textAlign:"center", color:"red"}}>city</h1>
        {city.map((x)=><tr><th>{x}</th></tr>)}
        
       </table>
        
        </>
        
    )
}
