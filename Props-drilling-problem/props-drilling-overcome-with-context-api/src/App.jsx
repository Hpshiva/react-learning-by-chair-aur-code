import { useState } from "react";

import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <div
        className="h-screen w-full bg-gray-900 text-white flex flex-col
       justify-center items-center"
      >
        <Dashboard />
      </div>
    </>
  );
}

export default App;
