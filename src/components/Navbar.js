import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <h1 className="logo">SummerEase</h1>
      <nav>
        <ul className="nav-links">
          <li>Vid to text summary</li>
          <li>Img to text summary</li>
          <li>Audio to text summary</li>
          <li>Text to text summary</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
