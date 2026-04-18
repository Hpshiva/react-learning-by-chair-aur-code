import React from "react";
import Home from "./Nav/Home";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header>
      <nav className="text-white flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/user/3934">User</Link>
      </nav>
    </header>
  );
}

export default Navbar;
