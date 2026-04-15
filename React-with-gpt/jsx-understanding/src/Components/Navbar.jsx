import React from "react";

function Navbar() {
  const isLogined = true;
  const name = "shiva";
  return (
    <div className="flex justify-between ">
      <p>Navbar</p>
      <p>Welcome || {isLogined ? name : "Guest"}</p>
      {/* <p>shortcut || {isLogined && <h1>Welcome</h1>}</p> */}
    </div>
  );
}

export default Navbar;
