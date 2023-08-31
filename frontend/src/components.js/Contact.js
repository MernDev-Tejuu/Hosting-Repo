import React,{useState} from "react";
// import "../component.css/Contact.css"
import { FcStart } from "react-icons/fc";
import { BsLinkedin, BsYoutube } from "react-icons/bs";
import { FaTwitter, FaUserTie } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { MdEmail, MdCall, MdMessage } from "react-icons/md";
const Contact = () => {

  const[data , setData]=useState({
    firstname:'',
    lastname: '',
    message: '',
    phone: '',
  })
  const[change,setChange]=useState('Send Message')
 const handleClick=()=>{
  setChange('Done')
 }
 if(change===undefined){
  window.alert('Please Input Your Message')
 }

  const handleInput =(e)=>{
  let name = e.target.name
  let value = e.target.value
  setData({...data,[name]:value})
  }
  

  return (
    <div className="Contact-bg-color">
      <div className="Contact-bg-container">
        <div className="grid-contact">
          <div className="grid-baby">
            <MdEmail /> Email<br></br>tejasgade921@gmail.com
          </div>
          <a
            href="https://youtu.be/FAfSdJl4HiI"
            id="contact-header"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "} 
            <div className="grid-baby">
              <FcStart /> Youtube<br></br>Arduino Robotics
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/tejas-gade-34440b244/"
            id="contact-header"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="grid-baby">
              <BsLinkedin /> Linkdin<br></br>connect me
            </div>
          </a>
        </div>
        <br></br>
        <div className="login-outer-container">
          <form>
            <legend>How Can We Help?</legend>
            <fieldset className="fieldset">
              <lable for="First name">
                <FaUserTie />
                First name :{" "}
              </lable>
              <input type="text" onChange={handleInput} value={data.firstname} name="firstname" id="form-firstName" />
              <br></br>
              <label for="last name">
                <FaUserTie /> Last name :{" "}
              </label>
              <input type="text" onChange={handleInput} value={data.lastname} name="lastname"  id="form-lastName" />
              <br></br>
              <label for="phone">
                <MdCall />
                Phone :{" "}
              </label>
              <input type="text" onChange={handleInput} value={data.phone} name="phone"  id="form-phone" />
              <br></br>
              <label for="message">
                <MdMessage /> Your Message :
              </label>
              <input type="text"  onChange={handleInput} value={data.message} name="message"  id="text-message" />
              <button id="login-button" onClick={handleClick}>{change}</button>
            </fieldset>
          </form>

          <div className="login-inner-container">
            <a
              href="https://www.linkedin.com/in/tejas-gade-34440b244/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://youtu.be/FAfSdJl4HiI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube />
            </a>
            <a
              href="https://www.linkedin.com/in/tejas-gade-34440b244/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/tejas-gade-34440b244/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrInstagram /> 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
