import React, { useEffect, useState } from "react";

function Lifecycle() {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([]);
  const [api, setApi] = useState(true);

  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  useEffect(() => {
    console.log("Counter Changed :-", counter);
  }, [counter]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((response) => setUsers(response));
      setApi(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const timmer = setTimeout(() => {
      console.log("Timer running...");
    }, 1000);

    return () => {
      clearInterval(timmer);
      console.log("Timer cleaned up");
    };
  });
  return (
    <>
      <div>
        <h1 className="text-[3rem]">{counter}</h1>
        <button
          onClick={() => setCounter(counter + 1)}
          className="py-3 rounded-md bg-purple-500 px-5 mb-5 text-white"
        >
          Counter Increase
        </button>
      </div>
      <div>
        {users.map((users) => {
          return (
            <h1 className="font-bold" key={users.id}>
              {" "}
              {api ? "Data Loading..." : users.name}
            </h1>
          );
        })}
      </div>
    </>
  );
}

export default Lifecycle;
