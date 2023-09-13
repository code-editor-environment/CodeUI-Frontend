import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import social1 from "../../assets/images/icon-social1.png";
import social2 from "../../assets/images/icon-social2.png";
import social3 from "../../assets/images/icon-social3.png";
function Footer() {
  return (
    <footer className="footer">
      <Link className="logo-wrapper" to="/">
        <h1
          className="home-page__heading"
          style={{ fontSize: "20px", margin: 0, padding: 0 }}
        >
          <img src={logo} alt="logo" />
          <p style={{ marginTop: "10px", fontSize: " 13px", color: "#ddd" }}>
            ©2023 CodeUi
          </p>
          <p style={{ marginTop: "5px", fontSize: " 11px", color: "#ddd" }}>
            Terms of Service · Privacy Policy
          </p>
        </h1>
      </Link>
      <div className="footer-main">
        <img src={social1} alt="social" />
        <img src={social2} alt="social" />
        <img src={social3} alt="social" />
      </div>
    </footer>
  );
}

export default Footer;
