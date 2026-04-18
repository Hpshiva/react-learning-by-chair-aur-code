import React, { useEffect, useState } from "react";

function FetchingData() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [refresh, setRefresh] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    if (!query) {
      setLoading(false);
      setUsers([]);
      return;
    }
    setLoading(true);
    const timmer = setTimeout(() => {
      async function asyncfun() {
        try {
          const res = await fetch("https://jsonplaceholder.typicode.com/users");
          const data = await res.json();
          const filtered = data.filter((user) => {
            return user.name.toLowerCase().includes(query.toLowerCase());
          });
          setUsers(filtered);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setError(error);
        }
      }
      asyncfun();
    }, 500);
    return () => {
      clearTimeout(timmer);
    };
  }, [query, refresh]);

  // Early Return Pattern
  let content;
  if (!query) content = <h1 className="text-2xl">Search data...</h1>;
  else if (!loading && users.length === 0 && query)
    content = <h1 className="text-2xl">No results found</h1>;
  else if (loading) content = <h1 className="text-2xl">Loading data...</h1>;
  else if (error) content = <h1 className="text-2xl">{error}</h1>;
  else
    content = users.map((users) => {
      return (
        <h1 key={users.id} className="text-2xl">
          {users.name}
        </h1>
      );
    });
  return (
    <div className="text-white gap-5 flex flex-col">
      <div>
        <input
          type="text"
          className="outline rounded-md p-3"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={() => setRefresh((prev) => !prev)}
          className="p-3 rounded-md bg-green-500"
        >
          Refresh
        </button>
      </div>
      <div className="p-5 bg-blue-500 rounded-md flex flex-col gap-4">
        {content}
        {/* {!query && <h1 className="text-2xl">Search data...</h1>} */}
        {/* {!loading && users.length === 0 && query && (
          <h1 className="text-2xl">No results found</h1>
        )} */}
        {/* {loading ? (
          <h1 className="text-2xl">Loading data...</h1>
        ) : (
          users.map((users) => {
            return (
              <h1 key={users.id} className="text-2xl">
                {users.name}
              </h1>
            );
          })
        )} */}
      </div>
    </div>
  );
}

export default FetchingData;
