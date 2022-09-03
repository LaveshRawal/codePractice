import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css"

const Navbar = () => {
  return (
    <>

    
    <nav className="nav">
      <a href="/" className="site-title">
        Site Name
      </a>
      <ul>
        <li>
         <NavLink to="/" activeclassname="active">Home</NavLink>
        </li>
        <li>
        <NavLink to="/About" activeclassname="active">About</NavLink>
        </li>
        <li>
        <NavLink to="/Price" clasactiveclassname="active">Price</NavLink>
        </li>
      </ul>
    </nav>
   
    </>
  );
};



export default Navbar;
