import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaUserTie, FaTransgenderAlt } from "react-icons/fa";
import { MdEmail, MdCall, MdNumbers } from "react-icons/md";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function RegisterPage() {
 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
    confirm: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const postData = async (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      age,
      gender,
      phone,
      email,
      password,
      confirm,
    } = formData;

    if (password !== confirm) {
      toast.error("Confirm password invalid");
      return; // Exit the function if passwords don't match
    }

    const reqfield = [
      "firstName",
      "lastName",
      "age",
      "gender",
      "phone",
      "email",
      "password",
      "confirm",
    ];
    function callMe(){
      
      toast.success('Signup Successful! Taking you to the login page.')
      
      setTimeout(()=>
      {navigate('/login')},5000
      )
    }
    let missingField = null;

    for (let fieldName of reqfield) {
      if (formData[fieldName].length === 0) {
        missingField = fieldName;
        break;
      }
    }

    if (missingField) {
      toast.error(`${missingField} is missing`);
    }else if(formData.phone.length !=10  ){
      console.log(true)
      toast.info('Phone no invalid ')
    } 
     else if (formData.length === undefined) {
      const res = await fetch("/register", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          age, 
          gender,
          phone,
          email,
          password,
          confirm,
        }),
      });
      if (formData.email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const errorMessage = await res.text();
        if (emailRegex.test(formData.email) === false) {
          console.log("run");
          toast.error("invalid email credentials");
        } else if (res.status === 409) {
          toast.error("Email Already In Use ");
        } else if (errorMessage.includes("E11000 duplicate key")) {
          toast.error("Phone no already registered");
        }
         
        else if (res.status ===201) {
          
         
          callMe()
         
        }
      } else {
        toast.error("Something not going as planned");
      }
    }
  };

  // const myPromise = Promise.reject(new SyntaxError("Unexpected token 'E', \"E11"));

  // myPromise
  //   .catch((error) => {
  //     if ( error.message.includes("E11")) {
  //       console.log(res.status === 200)
  //       window.alert('Phone is already in use');
  //     }
  //   });

  return (

    <div className="signup-bg">
      <div className="signup-outer-page">
        <div className="signup-inner-page">

          <form method="POST">
          
            <legend id="legend-signup">
              Please fill this form to register <FaUserTie />
            </legend>
            <fieldset id="fieldset-signup">
             <label id="label" for="firstname" className='label-lefty'>
               <span><FaUserTie /> First </span><span>name : {" "}</span>
              </label> 
              <br></br>
              <input
                type="text"
                id="label-left"
                name="firstName"
                value={formData.firstName}
                onChange={handleInput}
                required
              />
              <br></br>
              <label className='label-lefty' id="label" for="lastname">
                
                <span><FaUserTie />
                Last </span><span>name :{" "}</span>
              </label>
              <br></br>
              <input
                type="text"
                name="lastName"
                id="label-left"
                value={formData.lastName}
                onChange={handleInput}
                required
              />
              <br></br>
              <br></br>
              <label id="label" className='label-lefty' for="gender" >
                <FaTransgenderAlt /> Gender :
              </label>
              <br></br>
              
              <select id='option-gender' name= 'gender' value={formData.gender} onChange={handleInput}>
  <option id='option' name='gender'>Select Gender</option>
  <option id='option' name='gender'>Male</option>
  <option id='option' name='gender'>Female</option>
  <option id='option' name='gender'>LGBTQ</option>
  
</select>
              <br></br>
              <label id='age' className='label-lefty' for="age">
                <MdNumbers />
                Age :{" "}
              </label>
              <br></br>
              <input
                type="text"
                id="label-left"
                value={formData.age}
                onChange={handleInput}
                name="age"
                required
              />
              <br></br>
            <div id='main-compatment'>  <label id="label-right" for="phone">
                <MdCall /> Phone :
              </label>
              <br></br>
              <input
                type="text"
                id="label-right"
                value={formData.phone}
                onChange={handleInput}
                name="phone"
                required
              />
              <br></br>
              <label id="label-right" for="email">
                <MdEmail /> Email :
              </label>{" "}
              <br></br>
              <input
                type="email"
                name="email"
                id="label-right"
                value={formData.email}
                onChange={handleInput}
                required
              />
              <br></br>
              <label id="label-right" for="password">
                <span><RiLockPasswordLine /></span> <span>Password :</span>
              </label>
              <br></br>
              <input
                type="password"
                name="password"
                id="label-right"
                value={formData.password}
                onChange={handleInput}
                required
              />
              <br></br>
              <label id="label-right" className='white-label' for="password">
              <span>  <RiLockPasswordFill />
                Confirm</span> <span>Password :</span>
              </label>
              <br></br>
              <input
                
                type="password"
                name="confirm"
                value={formData.confirm}
                id="label-right"
                onChange={handleInput}
                required
              /></div>
              <br></br>
              <div id='button'>
                <button className="button-signup" onClick={postData}>
                Sign up
              </button>
              <ToastContainer />
              </div>

              
            </fieldset>
          </form>
          <div id="small"><div id="small-msg">
           <span> Already a</span><span> user?
            <NavLink id="signup-small" to="/login">
              Click here
            </NavLink></span>
          <div id="problem"></div>
          </div>
          </div>
          
        ///..
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
