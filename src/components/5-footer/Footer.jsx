import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
       
        <li>
          <Link to="/cv">CV</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
       
      </ul>

      <p> 2024 Abdullah Al-Tameemi</p>
    </footer>
  );
};

export default Footer;
