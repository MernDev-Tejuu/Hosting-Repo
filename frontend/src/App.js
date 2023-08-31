import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components.js/Home";
import Navbar from "./components.js/Navbar";
import About from "./components.js/About";
import Login from "./components.js/Login";
import Contact from "./components.js/Contact";
import Register from "./components.js/Signup";
import Ado from "../src/language/ADO";
import ASP from "../src/language/ASP";
import Dotnet from "../src/language/Dotnet";
import Agile from "../src/language/Agile";
import Azure from "../src/language/Azure";
const app = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dot-Net" element={<Dotnet />} />
        <Route path="/ado-net" element={<Ado />} />
        <Route path="/ASP-NET" element={<ASP />} />
        <Route path="/agile" element={<Agile />} />
        <Route path="/azure" element={<Azure />} />
      </Routes>
    </div>
  );
};
export default app;
