import React, { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [running, setRunning] = useState(true);
  //   const btnHandle = () => {
  //     setRunning;
  //   };
  useEffect(() => {
    if (!running) {
      console.log("Stoped...", counter);
      return;
    }
    const timmer = setInterval(() => {
      setCounter((prev) => {
        console.log(prev);
        return prev + 1;
      });
    }, 1000);

    return () => {
      clearInterval(timmer);
    };
  }, [running]);
  return (
    <div className="flex flex-col gap-5  items-center">
      <h1 className="text-4xl text-white">{counter}</h1>

      <button
        onClick={() => setRunning(!running)}
        className={`px-5 py-2  ${running ? "bg-red-500" : "bg-green-500"}  rounded-md text-white`}
        xw
      >
        {running ? "Stop" : "Start"} Counter
      </button>
    </div>
  );
}

export default Counter;
