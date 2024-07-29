export default function App() {
    const num=[1,2,3,4,5,6,]
        
    
    return(
        <>
         
       <table border="5px">
        <h1 style={{textAlign:"center", color:"red",fontFamily:"serif"}}>num</h1>
        {num.map((x)=><tr><th>{2*x}</th></tr>)}
        
       </table>
        
        </>
        
    )
}
