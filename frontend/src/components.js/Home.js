import React from "react";
import { NavLink } from "react-router-dom";
import "../style.css";
import{FcPaid}from "react-icons/fc"
import {
  
  FaCreativeCommons,
  FaDev,
  FaSlack,
  FaTumblr,
  FaDungeon,
  FaExpandArrowsAlt,
  FaUniregistry,
  FaCheck,
  FaStackOverflow,
  FaPython,
  FaStripeS,
  FaRavelry,
  FaRockrms,
  FaExclamation,
  FaVine,
  FaCanadianMapleLeaf,
  FaRProject,
  FaMedium,
  FaBullseye,
  FaSkype,
  FaFacebookF,
  FaPhp,
  FaReacteurope,
  FaKickstarterK,
  FaNodeJs,
  FaPatreon,
  FaGofore,
  FaCross,
  FaDesktop,
  FaICursor,
  FaDatabase,
  FaGlideG,
  FaHireAHelper,
  FaSlackHash,
  FaReact,
  FaAtlassian,
  FaAmilia,
  FaChrome,
  FaAutoprefixer,
  FaAcquisitionsIncorporated,
  FaRenren,
  FaTencentWeibo,
  FaSith,
  FaGithubSquare,
  FaJsSquare,
  FaDna,
  FaAudioDescription,
} from "react-icons/fa";

function Home() {
 
  return (
    <div className="home-body-container">
      <div id="home-text-header">
        <h1>Kill Your Tech Interview</h1>
        <h2>
          <span id="target1">3877</span>&nbsp; Full-Stack, Coding & System
          Design &nbsp; <span id="target2"> Interview Questions</span>
        </h2>
        <h2>Answered To Get Your Next Six-Figure Job Offer</h2>
        <button ><a id="button-question"  href="https://www.simplilearn.com/tutorials/data-science-tutorial/data-science-interview-questions" target={"_blank"}  rel="noreferrer" >See all Questions</a></button>
        <img
          id="arrow-image"
          src="http://www.animatedimages.org/data/media/1096/animated-click-here-sign-and-button-image-0019.gif"
          alt="logo"
        />
        <p id="para-button">Data Science & ML QAs</p>
      </div>
      <div className="nav-link-language-background">
        <div className="nav-link-language">
          <div className="grid-child" id="paid-language" >

            <NavLink to="/dot-Net">
              <button>
                <FaSith />
                <span id="gap"></span>.NET Core
              </button>
            </NavLink>
          </div>

          <div className="grid-child" id="paid-language">
            <NavLink to="/ado-net">
              <button>
                <FaAudioDescription />
                <span id="gap"></span>ADO.NET
              </button>
            </NavLink>
          </div>
          <div className="grid-child" id="paid-language">
            <NavLink to="/ASP-NET">
              <button>
                <FaAcquisitionsIncorporated />
                <span id="gap"></span>ASP.NET
              </button>
            </NavLink>
          </div>
          <div className="grid-child" id="paid-language">
            <NavLink to="/ASP-NET">
              <button>
              
                <FaAutoprefixer />
                <span id="gap"></span>ASP.NET MVC
              <fcPaid/>
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/ASP-NET">
              <button>
                <FaChrome />
                <span id="gap"></span>ASP.NET Web
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/agile">
              <button>
                <FaAmilia />
                <span id="gap"></span>Agile
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/azure">
              <button>
                <FaAtlassian />
                <span id="gap"></span>Azure
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaSlackHash />
                <span id="gap"></span>C#
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaCreativeCommons />
                <span id="gap"></span>CSS
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaDev />
                <span id="gap"></span>DevOps
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaFacebookF />
                <span id="gap"></span>Flutter
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaGithubSquare />
                <span id="gap"></span> Git
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaGofore />
                <span id="gap"></span>Golang
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaGlideG />
                <span id="gap"></span>GraphQL
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaHireAHelper />
                <span id="gap"></span>HTMl 5
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaPatreon />
                <span id="gap"></span>Ionic
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaDesktop />
                <span id="gap"></span>Java
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaJsSquare />
                <span id="gap"></span>Javascript
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaKickstarterK />
                <span id="gap"></span>Kotlin
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaICursor />
                <span id="gap"></span>LINQ
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaExclamation />
                <span id="gap"></span>Laravel
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaDatabase />
                <span id="gap"></span>Mongo DB
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaMedium />
                <span id="gap"></span>MySQL
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaNodeJs />
                <span id="gap"></span>Node.js
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaBullseye />
                <span id="gap"></span>OOP
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaStackOverflow />
                <span id="gap"></span>Objective-C
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaPhp />
                <span id="gap"></span>PHP
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaSlack />
                <span id="gap"></span>PWA
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaPython />
                <span id="gap"></span>Python
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaReact />
                <span id="gap"></span>React
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaReacteurope />
                <span id="gap"></span>React Hooks
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaRavelry />
                <span id="gap"></span>React Native
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaRProject />
                <span id="gap"></span>Redis
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaRockrms />
                <span id="gap"></span>Redux
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaRenren />
                <span id="gap"></span>Ruby
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaTencentWeibo />
                <span id="gap"></span>SQL
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaStripeS />
                <span id="gap"></span>Spring
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaSkype />
                <span id="gap"></span>Swift
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaCross />
                <span id="gap"></span>T-SQL
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaTumblr />
                <span id="gap"></span>TypeScript
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaCanadianMapleLeaf />
                <span id="gap"></span>UX Design
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaUniregistry />
                <span id="gap"></span>Unit Testing
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaVine />
                <span id="gap"></span>Vue.js
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaExclamation />
                <span id="gap"></span>iOS
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaCheck />
                <span id="gap"></span>jQuery
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaDna />
                <span id="gap"></span>WCF
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaDungeon />
                <span id="gap"></span>Web Sockets
              </button>
            </NavLink>
          </div>
          <div className="grid-child">
            <NavLink to="/dot-Net">
              <button>
                <FaExpandArrowsAlt />
                <span id="gap"></span>Web Security
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
