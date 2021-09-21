import React from "react";
import "../css/Navbar.css";
import logo from "../resources/logo1.png";
import GoogleAuth from "./GoogleAuth";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className=" ui secondary menu">
        <div className="fill">
          <Link to="/">
            <img
              alt=""
              src={logo}
              className="item ui small left floated image"
            />
          </Link>
        </div>
        <div className="right menu">
          <Link to="/dashboard" className="item">
            Dashboard
          </Link>
          <Link to="/journal" className="item">
            Journal
          </Link>

          <div className="item ui tiny header">
            <GoogleAuth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
