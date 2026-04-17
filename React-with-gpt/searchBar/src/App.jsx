import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [user, setUser] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setLoading(false);
      setUser([]);
      return;
    }

    const timmer = setTimeout(async () => {
      console.log("API called for:", query);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        const data = await response.json();
        // console.log(data);

        const filtered = data.filter(
          (user) => user.name.toLowerCase().includes(query.toLowerCase()), // fetch data acc to the user input
        );
        // console.log(filtered);

        setUser(filtered); // set that data to user which is Response of promise after applying the filter

        setLoading(false);
      } catch (error) {
        console.log("Error ", error);
      } finally {
        setLoading(false);
      }
    }, 500); // react Debouce

    return () => {
      clearTimeout(timmer); // clean up function to clear it
    };
  }, [query]);

  return (
    <>
      <div className="bg-gray-500 w-full h-screen flex flex-col gap-5 items-center justify-center">
        <input
          type="text"
          placeholder="Search Here..."
          className="outline p-3 rounded-md text-white"
          value={query} //get the "value" of "query"
          onChange={(e) => setQuery(e.target.value)} // onChange value will set to "query" with help of setQuery
        />

        <div className="p-5 bg-blue-500 rounded-md">
          {!query && <h1>Start typing...</h1>}

          {!loading && user.length === 0 && query && <h1>No results found</h1>}
          {loading
            ? "Loading Data..."
            : user.map((item) => {
                return <h1 key={item.id}>{item.name}</h1>;
              })}
        </div>
      </div>
    </>
  );
}

export default App;
