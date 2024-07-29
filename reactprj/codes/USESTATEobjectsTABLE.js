
import { useState } from "react"
 export default function App() {
    const info=[
        {
name:"ajay",
place:"hyderabad",
age:23
    },
    {
        name:"malathi",
        place:"USA",
        age:23
    },
        {
            name:"naveen",
            place:"pulivendula",
            age:23
            
        },
            {
                name:"irfan",
                place:"pakisthan",
                age:23
                
            },
                {
                    name:"vamsi",
                    place:"gujarath",
                    age:25
                    
                },
                    {
                        name:"vanadana",
                        place:"rajasthan",
                        age:23
                    },
                    {
                        name:"sudheer",
                        place:"mars",
                        age:40
                    },
                    {
                        name:"viswa",
                        place:"zupiter",
                        age:20
                    },
                    {
                        name:"prabanjan",
                        place:"london",
                        age:27
                    },
                    {
                        name:"sudhakar",
                        place:"canada",
                        age:55
                    },
                    {
                        name:"rakesh",
                        place:"ammila gundello",
                        age:"nava manmadhudu"
        
    }] 
    const[person,setData]= useState(info)
    return(
        <>
        <table border="10px" width="20px">
            <tr>
                <th>NAME</th>
                <th>PLACE</th>
                <th>age</th>
            </tr>
     {info.map((x)=> <tr><th>{x.name}</th><th>{x.place}</th><th>{x.age}</th></tr>)}
     </table>
        
        </>
        
    )
}
