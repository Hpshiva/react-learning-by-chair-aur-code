import React from "react";
import Cards from "./Cards";

function Hero() {
  const arr = [
    { name: "Shiva", desc: "Frontend", age: 23, isOnline: "active" },
    { name: "Kumar", desc: "Backend", age: 23, isOnline: "Offline" },
  ];
  return (
    <>
      <div>Hero</div>
      <div className="flex gap-4 py-5">
        {arr.map((items, index) => (
          <Cards
            isOnline={items.isOnline}
            name={items.name}
            desc={items.desc}
            age={items.age}
          />
        ))}
        {/* <Cards name="shiva" desc="Frontend" />
        <Cards name="Kumar" desc="Backend" /> */}
      </div>
    </>
  );
}

export default Hero;
