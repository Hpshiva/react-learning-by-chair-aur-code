import React, { useEffect, useState } from "react";
import Cards from "./Cards";

function Hero() {
  const [arr, setArr] = useState([
    { name: "Shiva", desc: "Frontend", age: 23, isOnline: "active" },
    { name: "chai", desc: "python", age: 18, isOnline: "Offline" },
    { name: "aur", desc: "go", age: 42, isOnline: "active" },
    { name: "code", desc: "javascript", age: 43, isOnline: "Offline" },
  ]);
  function btnHandle(name) {
    alert(`Button Clicked ${name}`);
  }
  function btndelete(name) {
    setArr(arr.filter((item) => item.name !== name));
  }
  const [api, setApi] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setApi(false);
    }, 2000);
  });
  return (
    <>
      <div>Hero</div>
      <div className=" mt-4 rounded-md bg-gray-800 p-4">
        <p>{api ? "Loading ... " : "Data Loaded"}</p>
      </div>
      <div className="flex gap-4 py-5">
        {arr.length > 2
          ? arr.map((items, index) => (
              <Cards
                key={index}
                isOnline={items.isOnline}
                name={items.name}
                desc={items.desc}
                age={items.age}
                btnHandle={() => btnHandle(items.name)}
              />
            ))
          : "No User"}

        {/* <Cards name="shiva" desc="Frontend" />
        <Cards name="Kumar" desc="Backend" /> */}
      </div>
      <p className="mt-5">Display with Filter and map combined</p>
      <div className="flex gap-4 py-5">
        {arr
          .filter((arr) => arr.age >= 5)
          .map((items, index) => (
            <Cards
              key={index}
              isOnline={items.isOnline}
              name={items.name}
              desc={items.desc}
              age={items.age}
              btnHandle={() => btnHandle(items.name)}
              btndelete={() => btndelete(items.name)}
            />
          ))}
      </div>
    </>
  );
}

export default Hero;
