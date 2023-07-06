import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./react logo.png";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="logo" />
        <h1 className="app-name">
          <a href="/">
            <img
              src="https://see.fontimg.com/api/renderfont4/PvDx/eyJyIjoiZnMiLCJoIjo5NCwidyI6MTAwMCwiZnMiOjk0LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TGlzdCBLZW55YQ/raph-lanok-future.png"
              alt="Bali fonts"
            />
          </a>
        </h1>
      </div>
      <nav className="nav-menu">
        <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
