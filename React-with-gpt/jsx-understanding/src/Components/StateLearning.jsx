import React, { useEffect, useState } from "react";

function StateLearning() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log(`shiva`, counter);
  }, [counter]);

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        value={name}
        className="outline rounded-md p-3"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={age}
        className="outline rounded-md p-3"
        placeholder="Enter Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <h1 className="text-4xl">{counter}</h1>
      <button
        onClick={() => setCounter(counter + 1)}
        className="bg-green-500 px-4 py-2  rounded-md"
      >
        Counter
      </button>
      <h2>{name}</h2>
      <h3>{age}</h3>
    </div>
  );
}

export default StateLearning;
