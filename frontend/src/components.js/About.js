import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'
import { FcManager } from "react-icons/fc";
import "../components.js/Login";
import { toast ,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import About from '../components.js/About'
const About = () => {

  const sendTo = useNavigate();
  const [fetchData, setData] = useState({});

  const useEffectCall = async () => {
   
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setData(data);
      
    };
    console.log(useEffectCall)

  useEffect(() => {
    useEffectCall();
  }, []);
  console.log(useEffectCall())
  
 
  
  
  return (
    <div className="About-Main-Background">
      <div className="About-inner-div">
        <div className="About-inner-child-image">
          <div id="inner-image-icon">
            <FcManager />
          </div>
        </div>
        <div id="About-Personal-Sector">
      
          <div id="img"></div>
          <p>
            I'm{" "}
            <span id="name-intro">
              {fetchData.firstName} {fetchData.lastName}
            </span>
          </p>
          <h6>Software developer at Google</h6>
          <div id="line-background"></div>
          <ul>
            <h6>
              <li id="color-red">
                Account No :
                
              </li><span className="About-fetchData">{fetchData._id}</span>
              <li>
                UserName:
              </li>
<span className="About-fetchData">{fetchData.firstName}<span>_</span>{fetchData.lastName}{fetchData.age}</span>
              <li>
                Age : 
              </li>
<span className="About-fetchData">{fetchData.age}</span>
              <li>
                Email :
                
              </li>

<span className="About-fetchData">{fetchData.email}</span>

              <li>
                Gender:
                
              </li>
<span className="About-fetchData">{fetchData.gender}</span>

              <li>
                Phone:
              </li>
<span className="About-fetchData"><span>+91-</span>{fetchData.phone}</span>
              
            </h6>
          </ul>
        </div>
        <div id="About-Last-Box">
      <button className="social-btn">
        <FaInstagram />
        <span className="btn-name">Instagram</span>
      </button>

      <button className="social-btn">
        <FaTwitter />
        <span className="btn-name">Twitter</span>
      </button>

      <button className="social-btn">
        <FaYoutube />
        <span className="btn-name">YouTube</span>
      </button>

      <button className="social-btn">
        <FaLinkedin />
        <span className="btn-name">LinkedIn</span>

      </button>
    </div>
      </div>
      
      <ToastContainer/>
    </div>
  );
};
export default About;
