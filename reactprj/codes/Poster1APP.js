import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './style.css'
export default function App() {
  return (
      <>
     
      <div className='container'>
              <div className='row '> 
                  <div className='col-md-8 pt-5'>
                      <h1>Learn Complete<br/>
                      <span>Web Development</span><br/>Course </h1>
                      <br></br>
                   <p> This course breaks down <b>HTML forms into easy to under pieces</b>.Over <br/>
            the next few modules,you'll learn how to HTML form works and how to use <br/>
            <b>Them effoctlly in your projects.</b></p>

                      <button id='but1'>Know More</button>
                  </div>
                  <div className='col-md-4' id="col">    
                    <div className='apple'>                 
                  <form>
<button id='but' style={{width:'270px',backgroundColor:'white',color:'red',marginLeft:'40px'}}>Login Now</button>
<input type="text"  placeholder="Enter the email or username"/>
<input type="password" placeholder="password"/>
<br/>
<button id='but'>Login</button>
</form>
<h6>Don"t have account?
    <br/><span>create new account</span>
</h6>
</div>
</div>
</div>
</div>
      </>
  )
}
 