import React, { memo, useCallback, useState } from "react";
import "./App.css";

const Child1 = memo(({ value1, Child1Counter }) => {
  console.log("Child 1 rendered");
  return (
    <>
      <p>Child-1 :- {value1}</p>
      <button
        className="px-4 py-2 rounded-md bg-green-500"
        onClick={Child1Counter}
      >
        Child 1 Counter
      </button>
    </>
  );
});
const Child2 = memo(({ value2, Child2Counter }) => {
  console.log("Child 2 rendered");
  return (
    <>
      <p>Child-2 :- {value2}</p>
      <button
        className="px-4 py-2 rounded-md bg-green-500"
        onClick={Child2Counter}
      >
        Child 2 Counter
      </button>
    </>
  );
});

function App() {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const ParentCounter = () => {
    setCounter((prev) => prev + 1);
  };
  const Child1Counter = useCallback(() => {
    setCounter1((prev) => prev + 1);
  }, [counter1]);
  const Child2Counter = useCallback(() => {
    setCounter2((prev) => prev + 1);
  }, [counter2]);
  console.log("Parent rendered");
  return (
    <>
      <div className="flex flex-col gap-5">
        <h1>Parent - {counter}</h1>
        <button
          className="px-4 py-2 rounded-md bg-green-500"
          onClick={ParentCounter}
        >
          Parent Counter
        </button>
        <Child1 value1={counter1} Child1Counter={Child1Counter} />
        <Child2 value2={counter2} Child2Counter={Child2Counter} />
      </div>
    </>
  );
}

export default App;
