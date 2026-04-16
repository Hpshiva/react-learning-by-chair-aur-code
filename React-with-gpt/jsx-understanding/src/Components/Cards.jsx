import React, { useState } from "react";

function Cards({ desc, name, age, isOnline, btnHandle, btndelete }) {
  //props then  {props.name}
  const [toggle, setToggle] = useState(true);
  // later we have destructing with {items, items,items}

  return (
    <>
      <div className="rounded-md bg-gray-400 p-5">
        <div className="flex justify-between">
          <p>Cards</p>
          <button onClick={() => setToggle(!toggle)}>
            {toggle ? "On" : "Off"}
          </button>
        </div>
        <p>name : {name}</p>
        <p>desc : {desc}</p>
        <p>age : {age}</p>
        <p>Status : {isOnline}</p>

        <button
          onClick={btnHandle}
          className=" mt-3 rounded-md px-5 py-2 bg-blue-300"
        >
          Click me !
        </button>
        <button
          onClick={btndelete}
          className=" mt-3 rounded-md px-5 py-2 bg-blue-500"
        >
          Delete me !
        </button>
      </div>
    </>
  );
}

export default Cards;
