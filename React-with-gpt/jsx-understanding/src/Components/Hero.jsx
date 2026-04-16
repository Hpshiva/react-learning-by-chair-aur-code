import React from "react";
import Cards from "./Cards";

function Hero() {
  const arr = [
    { name: "Shiva", desc: "Frontend", age: 23, isOnline: "active" },
    { name: "Kumar", desc: "Backend", age: 23, isOnline: "Offline" },
  ];
  function btnHandle(name) {
    alert(`Button Clicked ${name}`);
  }
  return (
    <>
      <div>Hero</div>
      <div className="flex gap-4 py-5">
        {arr.map((items, index) => (
          <Cards
            key={index}
            isOnline={items.isOnline}
            name={items.name}
            desc={items.desc}
            age={items.age}
            btnHandle={() => btnHandle(items.name)}
          />
        ))}
        {/* <Cards name="shiva" desc="Frontend" />
        <Cards name="Kumar" desc="Backend" /> */}
      </div>
    </>
  );
}

export default Hero;
