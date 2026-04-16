import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((data) => setUsers(data)),
    );
    const intervel = setTimeout(() => {
      console.log("Running");
    }, 1000);
    return () => {
      clearInterval(intervel);
    };
  }, [counter]);
  return (
    <>
      <h1 className="text-4xl">{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
        className="bg-cyan-500 px-4 py-2 rounded-md"
      >
        {" "}
        click me
      </button>
      <div>
        {users.map((item, index) => {
          return <h1 key={item.id}>{item.name}</h1>;
        })}
      </div>
    </>
  );
}

export default Users;
