import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import {toast , ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import About from '../components.js/About'
function Login() {
  //implement useState React hook method,useState is a function which takes to arguments 01)state variable 02)updated function both are in form of array

  //useState Hook Syntax:

  //const[variable,function] = useState('initial Value')
  //This Initial value get store in variable which is first argument of useState
  //Second argument is use when the value gets change

  
  const navigate = useNavigate()
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const inputHandle = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  const pushLoginData=async(e)=>{
    e.preventDefault()
    const{email,password}=userLogin

    const res = await fetch('/login',{
      method:'POST',
      headers:{
        'content-Type':'application/json'
      },
      body:JSON.stringify({
        email,
        password
      })
    })
    const data = res.json()

    function callMeOnTime(){
      let removeAgain = email.slice(0,email.indexOf('@'))
   let rename = removeAgain.replace(/\d+/g, "")
      toast.info(`Hey ${rename} 👋🏻, take a peek at your profile!`)
    }
    console.log(res)
     if (res.status === 404) {
   toast.error("User not found");
  } else if (res.status === 422) {
   toast.error("Invalid credentials");
  } else if (res.status === 200) {
    callMeOnTime()
    setTimeout(()=>{navigate('/about')},5000)

    
  } else {
   toast.error("Something went wrong");
  }
  }
  
  const {email}=userLogin

  let remove = email.slice(0,email.indexOf('@'))
   let finalText = remove.replace(/\d+/g, "")
  
  
 
  return (
    <div className="signup-bg">
    <ToastContainer/>
      <div className="signup-outer-page">
        <div className="Login-inner-page">
          <form method='POST'>
            <legend id='legend'>
             hello <span id='jsx'><AiOutlineUserAdd />   {finalText}</span><br></br> Welcome to TechTej<br></br>

            </legend>

            <fieldset id="login-page">
              <label for="email">
                <MdEmail /> Email :
              </label>
              <br></br>
              <input
              
                type="text"
                name="email"
                value={userLogin.email}
                onChange={inputHandle}
                required
              />
              <br></br>
              <label for="password">
                <RiLockPasswordFill /> Password :
              </label>
              <br></br>
              <input
                type="password"
                name="password"
                value={userLogin.password}
                onChange={inputHandle}
                required
              />
              <br></br>
              <button id="login-button" onClick={pushLoginData}>Log in</button>
              <ToastContainer/>
            </fieldset>
          </form>
 
          <small id="login-small">
            Not an user?<NavLink to="/register">Click here</NavLink>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Login;
