export default function App() {
    const num=[0,1,2,3,4,5,6,7,8,9]
    return(
        <>
        <h2>App</h2>
        <select>
        {num.map((x)=><option>{x}</option>)}
        </select>
        </>
    )
}