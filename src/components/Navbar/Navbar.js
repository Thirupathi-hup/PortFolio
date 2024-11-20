import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" id="navbar">
      <div className="container my-2 pl-5">
        <Link to="/" className="navbar-brand" id="headerLink">
          Thirupathi P
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#collapseNav"
        >
          <span className="fa-solid fa-bars ham-menu" id="ham-menu"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
          <div className="navbar-nav font-weight-normal text-center">
            <Link to="/" className="nav-link mx-1 active" id="navLink">
              Home
            </Link>
            <Link to="/about" className="nav-link mx-2" id="navLink">
              About
            </Link>
            <Link to="/skills" className="nav-link mx-2" id="navLink">
              Skills
            </Link>
            <Link to="/projects" className="nav-link mx-2" id="navLink">
              Projects
            </Link>
            <Link to="/certificates" className="nav-link mx-2" id="navLink">
            Certificates
            </Link>
            <Link to="/contact" className="nav-link mx-2" id="navLink">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;