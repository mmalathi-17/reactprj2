import React from 'react'
import pic from './background.jpg'
const a={
    padding:'10px'
}
  
export default function Comp2() {
    return (
        <>
       
        <div className='container'>
                <div className='row '>
                    <div className='col-md-8 pt-5'>
                        <h1 style={{fontFamily:"sans-serif"}}>Learn Complete</h1>
                        <h1 style={{fontFamily:"sans-serif"}}><span style={{color:"yellow",fontFamily:'sans-serif'}}>Web Development</span><br/>Course </h1>
                        <br></br>
                     <p> This course breaks down HTML forms into easy to under pieces.Over <br/>
              the next few modules,you'll learn how to HTML form works and how to use <br/>
              them effoctlly in your projects.</p>

                        <button style={{backgroundColor:"yellow",fontFamily:"inherit", borderRadius:"30px",padding: "10px",cursor: 'pointer',color:"white",margin:"30px"}}>Start Now</button>
                    </div>
                    <div className='col-md-4 pt-5' >
                       
                    <form>
<h4 class="now">Login now </h4>
<input class="input1" type="text"  placeholder="Enter the email or username"/>
<input class="input2" type="password" placeholder="password"/>
<br/>
<button class="login"  style={{color:"white",backgroundColor:"yellow",borderRadius:"50px",padding:"10px 25px",margin:"30px"}}>Login</button>
</form>
<p  > Don"t have account? <br/>
<a class="x" href="" >create new account </a> </p>

</div>
</div>
</div>
        </>
    )
}
 


