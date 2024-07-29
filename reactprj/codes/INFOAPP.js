


import { useState } from "react"
import Data from './info.json'
 function App() {
    const [state,setState]=useState(Data)
    return(
        <>
        <table border="3px">
{state.map((x)=><tr><th>{x.name}</th><th>{x.place}</th><th>{x.age}</th></tr>)}
</table>
        </>
        
    )
}
export default App