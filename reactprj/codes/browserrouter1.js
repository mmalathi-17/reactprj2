import React from 'react'
import About from'./components/About'
import Service from'./components/Service'
import Contact from'./components/Contact'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
export default function App() {

      return(
    <>
    <h1>Main Page</h1>
    <BrowserRouter>
<Routes>
  <Route path='/about' element={<About/>}></Route>
   <Route path='/Service' element={<Service/>}></Route>
   <Route path='/Contact' element={<Contact/>}></Route>
</Routes>
</BrowserRouter>
    </>
      )
}