




import React from 'react'

import clasess from './login.module.css';

import { useState } from 'react';
import {useNavigate,Link} from 'react-router-dom';
import {useDispatch}  from 'react-redux';

import { login } from '../../redux/authSlice';

import img from '../../assets/burger1.jpg';

const Login = () => {

  const [Email, setEmail]=useState("");
  const [Password, setPassword]=useState("");
  const [error,setError]=useState(false);
  const dispatch= useDispatch();

  const navigate=useNavigate();




  const handleSubmit=async(e)=>{

e.preventDefault();


try{

const  res = await fetch('http:localhost:5090/auth/login',{

headers:{

  'Content-Type':'Application/json'
},

method:"POST",
body: JSON.stringify({Email,Password})

})

const data= await res.json()
console.log(data)
dispatch(login(data))
navigate("/")


}catch(error){

  setError(true);
setTimeout(()=>{
  setError(false)
},3000);

}


  }

  return (
    <div className={clasess.logincontainer}>
      <div className={clasess.loginwrapper}>



<div className={clasess.loginLeftside}>
  <img src={img} className={clasess.leftImg} alt=""/>
</div>
<div clasName={clasess.loginRightSide}>
  <h2 className={clasess.title}>Login</h2>
  <form  onSubmit={handleSubmit}  className={clasess.loginForm}>
    <input type="email"  placeholder="Type Your Email" onChange={(e)=>setEmail(e.target.value)}/>
    <input type="password"  placeholder="Type Your Password"  onChange={(e)=>setPassword(e.target.value)}/>
  
  <button  className={clasess.submitBtn}>Login</button>
  <p>Don't have an account?<Link  to="/Signup">Sign In</Link></p>
  </form>


  {


error && <div  className={clasess.errorMessage}>
  Wrong credentials Try different ones
</div>
  }
</div>
        </div>
      


    </div>
  )
}

export default Login

