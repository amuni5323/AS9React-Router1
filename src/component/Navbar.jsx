import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="d-flex justify-content-between align-items-center p-4 border-bottom mx-5">
    <h6 className="m-0">Company Name</h6>
    <nav className="ml-auto">
      <ul className="list-unstyled d-flex m-0">
        <li className="ms-3"> 
          <NavLink to="/" className="text-decoration-none text-dark">
            Home
          </NavLink>
        </li>
        <li className="ms-3">
          <NavLink to="/features" className="text-decoration-none text-dark">
            Features
          </NavLink>
        </li>
        <li className="ms-3"> 
          <NavLink to="/enterprise" className="text-decoration-none text-dark">
            Enterprise
          </NavLink>
        </li>
        <li className="ms-3">
          <NavLink to="/support" className="text-decoration-none text-dark">
            Support
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
  
  );
}

export default Navbar;
