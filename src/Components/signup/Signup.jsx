

import React, { useState } from 'react'
import clasess from './signup.module.css'

import Img from '../../assets/burger1.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/authSlice';
const Signup = () => {

  const [username,setUsername]=useState("")
  const [email,setEmail]= useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
  const dispatch=useDispatch()
  const navigate=useNavigate()

const handleSubmit=  async(e)=>{

e.preventDefault();


try{

const res= await fetch('http://localhost:5090/auth/register',{
headers:{

  'Content-Type':'application/json',
},
method:"POST",

body:JSON.stringify({username,email,password})

})

const   data= await res.json()
dispatch(register(data))
navigate('/')

}
catch(error){

setError(true)
setTimeout(()=>{

  setError(false) 
},3000)

}

}




  return (
    <div    className={clasess.signupcontainer}>
<div className={clasess.wrapper}>

<div className={clasess.leftSide}>

<img src={Img}    alt="img"  className={clasess.leftImg}/>
</div>

<div className={clasess.Rightside}>
<h2  className={clasess.title}>Sign Up</h2>
<form  onSubmit={handleSubmit}  className={clasess.signupForm}>

<input type="text"    placeholder="Enter Your Name"  onChange={(e)=>setUsername(e.target.value)}/>
<input type="email"    placeholder="Enter Your Email"  onChange={(e)=>setEmail(e.target.value)}/>
<input type="password"    placeholder="Enter Your Password"  onChange={(e)=>setPassword(e.target.value)}/>
<button className={clasess.button}>Sign Up</button>
<p>Already have an account?</p><Link  to="/login">Login</Link>

</form>


{


  error &&   (

    <div className={clasess.errormessage}>

      Wrong credentials Try bdifferent ones?
    </div>
  )
}
</div>

</div>

      
    </div>
  )
}

export default Signup;
