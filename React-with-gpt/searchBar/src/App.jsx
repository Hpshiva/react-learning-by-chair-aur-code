import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Nav/Home";
import About from "./Components/Nav/About";
import Contact from "./Components/Nav/Contact";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import User from "./Components/Nav/User";
import FetchingData from "./Components/FetchingData";

const Newchild = React.memo(({ name }) => {
  console.log("Child render");
  return (
    <h1>{name}</h1>
    // <h1>Funtion {callback()}</h1>
    //  FAIL REACT.MEMO
    // <h1>
    //   {name}
    //   //{obj.name}
    // </h1>
  );
});

function App() {
  const [counter, setCounter] = useState(0);
  const name = "shiva kumar";
  //  FAIL REACT.MEMO
  //  const obj = { name: "chai-aur-code" };
  const callback = () => {
    console.log("FUnciton re-rendering");
  };
  return (
    <div className="bg-gray-500 w-full h-screen flex flex-col gap-[10rem] items-center justify-center">
      {/* <Search /> */}
      {/* <Counter /> */}
      {/* <Navbar /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<User />} />
      </Routes> */}
      {/* <FetchingData /> */}
      <button
        className="p-5 bg-green-500"
        onClick={() => setCounter((prev) => prev + 1)}
      >
        +
      </button>
      <Newchild name={name} />
      {/*  FAIL REACT.MEMO */}
      {/* <Newchild obj={obj} callback={callback} /> */}
    </div>
  );
}

export default App;
