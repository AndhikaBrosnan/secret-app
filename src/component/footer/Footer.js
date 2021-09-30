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
      <div class="ui grid">
        <div class="five wide column">
          <h2>Contact Us</h2>
          <div>Jl Jatimakmur Kompl Rama Plaza Bl E/69, Dki Jakarta</div>
          <div>+620218472946</div>
          <div>Jakarta</div>
        </div>
        <div class="five wide column">
          <h2>Social Media</h2>
          <div className="soc-med-button">
            <button class="ui facebook button full-width">
              <i class="facebook icon "></i>
              Facebook
            </button>
          </div>
          <div className="soc-med-button">
            <button class="ui instagram button full-width">
              <i class="instagram icon"></i>
              Instagram
            </button>
          </div>
          <div className="soc-med-button">
            <button class="ui twitter button full-width">
              <i class="twitter icon"></i>
              Twitter
            </button>
          </div>
          <div className="soc-med-button">
            <button class="ui linkedin button full-width">
              <i class="linkedin icon"></i>
              LinkedIn
            </button>
          </div>
        </div>
        <div style={{ textAlign: "center" }} class="five wide column">
          <h2> Are you Clinicians?</h2>
          <button class="ui green button">Register here</button>
          <h3>Let's Connect!</h3>
        </div>
      </div>
    </div>
  );
};
export default Footer;
