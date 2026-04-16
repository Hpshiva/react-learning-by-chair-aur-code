import React, { use, useState } from "react";

function Navbar() {
  const isLogined = true;
  const [login, setLogin] = useState(true);
  const [show, setShow] = useState(true);

  const name = "shiva";
  return (
    <div className="flex justify-between ">
      <p>Navbar</p>
      <button
        className={`px-[4rem] py-2 rounded-md ${show ? "bg-green-500" : "bg-red-900"}`}
        onClick={() => setShow(!show)}
      >
        {show ? "On" : "Off"}
      </button>
      <button
        onClick={() => setLogin(!login)}
        className={`px-[2rem] py-2 rounded-md ${login ? "bg-green-800" : "bg-red-900"}`}
      >
        Welcome || {login ? "Logout !!" : "Login !!"}
      </button>
      <p>Welcome || {isLogined ? name : "Guest"}</p>
      {/* <p>shortcut || {isLogined && <h1>Welcome</h1>}</p> */}
    </div>
  );
}

export default Navbar;
