import React from "react";

function Cards({ desc, name, age, isOnline }) {
  //props then  {props.name}

  // later we have destructing with {items, items,items}

  return (
    <>
      <div className="rounded-md bg-gray-400 p-5">
        <p>Cards</p>
        <p>name : {name}</p>
        <p>desc : {desc}</p>
        <p>age : {age}</p>
        <p>Status : {isOnline}</p>

        <button className=" mt-3 rounded-md px-5 py-2 bg-blue-300">
          CLick me !
        </button>
      </div>
    </>
  );
}

export default Cards;
