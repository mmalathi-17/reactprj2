import React,{useState} from 'react'
import './style.css'
const App =()=>{
const [search,setSearch]=useState('')
const [data,setData]=useState([])
 const submitHandler= e => {
  e.preventDefault()
  fetch(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`)
  .then(response => response.json())
  .then(value =>setData (value.Search))
 }
  return (
    
    <div className='container-fluid'>
      <>
      <body>
       <h2 style={{textAlign:"center",color:"white",fontFamily:'revert-layer'}}>Search for favourite movie</h2>
       <form onSubmit={submitHandler}>
        <input type='text'  value={search} onChange={(e)=>setSearch(e.target.value)} style={{width:"100%"}}/><br/>
        <input type='submit' value='search'/>
       </form>
       <div className="row" >
       {data.map(movie=>
       <div className='col-md-3'>
        <div class="card" style={{width: "18rem"}}>
          <img src={movie.Poster} class="card-img-top" width='300px' height="350px" alt={movie.Title}/>
          <div class="card-body">
           <h3 class="card-title" style={{color:"black"}}>{movie.Title}</h3>
          </div>
        </div>
        </div>
       )}
       </div>
       </body>
       </>
    </div>
   
  )
}
export default App