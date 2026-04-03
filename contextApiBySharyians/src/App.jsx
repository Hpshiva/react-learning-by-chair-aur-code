import { useState } from "react";

import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./conponents/Home";
import About from "./conponents/About";
import User from "./conponents/User";
import UserDetails from "./conponents/UserDetails";

function App() {
  return (
    <>
      <nav className="flex gap-[3rem] mt-[5rem] text-center justify-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user">User</Link>
      </nav>

      <div className="flex gap-[3rem] mt-[5rem] text-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
