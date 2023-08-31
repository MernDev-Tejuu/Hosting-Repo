import React from "react";
import Mydata from "../storage/DotNET-data";
import Mydata2 from "../storage/DotNETdata2";
import Mydata3 from "../storage/DotNETdata3";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Dotnet = () => {
  return (
    <div className="main-Dotnet-background">
      <div className="title-Dotnet">
       <NavLink to = "/"><button><icon id="Go-back"><BsArrowLeftCircleFill/>Go Back</icon></button></NavLink>
        <h1>Top 68 .NET Core Interview Questions</h1>
      </div>
      <p id="msg-Hover">
        <span id="s1">Hover</span> Over the List Below to View the{" "}
        <span id="s2">top 10 Most Important question</span>
      </p>
      <div className="grid-maker">
        <Mydata />
        <Mydata2 />
        <Mydata3 />
      </div>
    </div>
  );
};

export default Dotnet;
