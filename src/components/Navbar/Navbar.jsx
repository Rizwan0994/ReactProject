
import React, { useState } from "react";
import "../Navbar/Navbar.css";
import noti from "../Navbar/lmm.png";
import profile from "../Navbar/eclipse.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <a className="mylogoo" href="/profile"> </a>
    <div className="Navbar">
        
      <span className="nav-logo"></span>
      <div className={`nav-items ${isOpen && "open"}`}>
      
      
     
        <img className="not" src={noti} alt=''/>
        <img className="pro" src={profile} alt=''/>
        <h7 className="navtxt" href="/">Alex Senthil</h7>

        
       
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
    </>
  );
};

export default Navbar;