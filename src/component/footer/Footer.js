import React from "react";
import "../../css/Footer.css";

const Footer = () => {
  return (
    <div
      style={{
        padding: "5rem",
        background: "#3D3D3D",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        left: "50%",
        right: "50%",
        width: "100vw",
        boxSizing: "border-box",
        color: "white",
      }}
      className="ui container"
    >
      <div className="ui grid">
        <div className="five wide column">
          <h2>Contact Us</h2>
          <div>Jl Jatimakmur Kompl Rama Plaza Bl E/69, Dki Jakarta</div>
          <div>+620218472946</div>
          <div>Jakarta</div>
        </div>
        <div className="five wide column">
          <h2>Social Media</h2>
          <div className="soc-med-button">
            <button className="ui facebook button full-width">
              <i className="facebook icon "></i>
              Facebook
            </button>
          </div>
          <div className="soc-med-button">
            <button className="ui instagram button full-width">
              <i className="instagram icon"></i>
              Instagram
            </button>
          </div>
          <div className="soc-med-button">
            <button className="ui twitter button full-width">
              <i className="twitter icon"></i>
              Twitter
            </button>
          </div>
          <div className="soc-med-button">
            <button className="ui linkedin button full-width">
              <i className="linkedin icon"></i>
              LinkedIn
            </button>
          </div>
        </div>
        <div style={{ textAlign: "center" }} className="five wide column">
          <h2> Are you Clinicians?</h2>
          <button className="ui green button">Register here</button>
          <h3>Let's Connect!</h3>
        </div>
      </div>
    </div>
  );
};
export default Footer;
