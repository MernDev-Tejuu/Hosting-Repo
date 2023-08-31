import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { FcServices,FcStart,FcManager } from "react-icons/fc";
import {GiClick}from 'react-icons/gi'
import "../style.css"
import { NavLink } from 'react-router-dom'

const Navbar = ()=>{
    return(
      
        <nav id="navbar-body-container" className="navbar navbar-expand-lg navbar-light bg-light">

  <NavLink className="navbar-brand" to="/about"><span id='Me-Sector'><FcManager/></span><br></br><h6>Me<GiClick/></h6></NavLink><a href="https://youtu.be/FAfSdJl4HiI" target={'_blank'} rel="noreferrer">
  </a>
  <div className="collapse-navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li  className="nav-item-active">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Contact">Contact us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" id='register' to="/register">Register</NavLink>
      </li>
    </ul>
  </div>
</nav>


    )
}
export default Navbar