import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Vidium Blog</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/posts">Posts</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
