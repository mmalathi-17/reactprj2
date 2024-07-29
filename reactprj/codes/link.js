import React from 'react'
import About from'./components/About'
import Service from'./components/Service'
import Contact from'./components/Contact'
import './style.css'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
export default function App() {

      return(
    <>
    <h1>Main Page</h1>
    <BrowserRouter>
    <Link to='/' className='d'>home</Link>
    <br/>
    <Link to='/About'className='a'>about</Link>
    <br/>
    <Link to='/Service' className='b'>service</Link>
    <br/>
    <Link to='/Contact' className='c'>Contact</Link>
<Routes>
<Route path='/' element={<h1>home</h1>}></Route>
  <Route path='/about' element={<About/>}></Route>
   <Route path='/Service' element={<Service/>}></Route>
   <Route path='/Contact' element={<Contact/>}></Route>
</Routes>
</BrowserRouter>
    </>
      )
}

