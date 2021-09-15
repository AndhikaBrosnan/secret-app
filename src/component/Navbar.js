import React from "react";
import "../css/Navbar.css";
import logo from "../resources/logo1.png";
import GoogleAuth from "./GoogleAuth";

const Navbar = () => {
  return (
    <div>
      <div className=" ui secondary menu">
        <div className="fill">
          <img alt="" src={logo} className="item ui small left floated image" />
        </div>

        <div className="right menu">
          <a href="#!" className="item">
            Dashboard
          </a>
          <a href="#!" className="item">
            Journal
          </a>
          <div className="item ui tiny header">
            {/* <button className="ui inverted primary  button">Logout</button> */}
            <GoogleAuth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
