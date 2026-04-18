import React from "react";
import "./App.css";
import Home from "./Components/Nav/Home";
import About from "./Components/Nav/About";
import Contact from "./Components/Nav/Contact";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import User from "./Components/Nav/User";

function App() {
  return (
    <div className="bg-gray-500 w-full h-screen flex flex-col gap-[10rem] items-center justify-center">
      {/* <Search /> */}

      {/* <Counter /> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
