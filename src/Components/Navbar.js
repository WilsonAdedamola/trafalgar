import React, { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import logo from "../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      {MobileNavbar()}
      <div className="show">
        <div className="logo-container">
          <div className="logo">
            <img src={logo} alt="Trafalgar" />
          </div>
        </div>
        <div className="nav-links">
          <p className="active">Home</p>
          <p>Find a doctor</p>
          <p>Apps</p>
          <p>Testimonials</p>
          <p>About us</p>
        </div>
      </div>
    </nav>
  );
};

const MobileNavbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="hide">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Trafalgar" />
        </div>
        <div>
          {!show ? (
            <HiOutlineMenuAlt2 className="size" onClick={() => setShow(true)} />
          ) : (
            <GrFormClose className="size" onClick={() => setShow(false)} />
          )}
        </div>
      </div>
      <div className={show ? "mobile-nav-links" : "hidden"}>
        <p className="active">Home</p>
        <p>Find a doctor</p>
        <p>Apps</p>
        <p>Testimonials</p>
        <p>About us</p>
      </div>
    </div>
  );
};

export default Navbar;
