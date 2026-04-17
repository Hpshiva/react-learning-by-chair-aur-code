import React from "react";
import "./App.css";
import Search from "./Components/Search";
import Counter from "./Components/Counter";
function App() {
  return (
    <div className="bg-gray-500 w-full h-screen flex flex-col gap-[10rem] items-center justify-center">
      {/* <Search /> */}

      <Counter />
    </div>
  );
}

export default App;
