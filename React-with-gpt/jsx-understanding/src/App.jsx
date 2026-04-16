import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import StateLearning from "./Components/StateLearning";
import Users from "./Components/Users";
import Lifecycle from "./Components/Lifecycle";
import useToggle from "./Components/useToggle";
import UseFetch from "./Components/UseFetch";

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const [user, setUser] = useState(true);
  const [isOn, setToggle] = useToggle();

  const { data, loading } = UseFetch(
    "https://jsonplaceholder.typicode.com/users",
  );
  return (
    <>
      <div className="w-full text-white h-full p-[2rem] bg-red-500">
        {user && <Navbar />}
        <Hero />
        <Footer />
        <div className="p-4 bg-pink-400 rounded-md w-fit">
          <h2>{counter}</h2>
          <div className="flex mt-2 gap-2">
            <button
              className="px-4 py-2 bg-green-400 rounded-md"
              onClick={() => setCounter(counter + 1)}
            >
              Increase
            </button>
            <button
              className="px-4 py-2 bg-green-400 rounded-md"
              onClick={() =>
                setCounter(counter > 0 ? counter - 1 : (counter = 0))
              }
            >
              Decrease
            </button>
            <button
              className="px-4 py-2 bg-green-400 rounded-md"
              onClick={() => setCounter(0)}
            >
              Reset
            </button>
          </div>
        </div>
        <div className=" mt-4 p-4 bg-orange-400 rounded w-fit">
          <input
            type="text"
            className="outline"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>{name}</p>
        </div>
        <div className="mt-3">
          <Form />
        </div>
        {/* <div className="mt-[3rem] p-4 bg-orange-200 text-black rounded-md w-fit">
          <StateLearning />
        </div> */}
        {/* <div className="mt-[3rem] p-4 bg-orange-200 text-black rounded-md w-fit">
          <Users />
          </div> */}
        <div className="mt-[3rem] p-4 bg-cyan-400 text-black rounded-md w-fit">
          <p>data - api with useEffect</p>
          <Lifecycle />
        </div>

        <div className="mt-[3rem] p-4 bg-yellow-400 text-black rounded-md w-fit">
          <h1 className="text-4xl">{isOn ? "On" : "Off"}</h1>
          <button
            onClick={setToggle}
            className="px-5 py-2 rounded-md bg-purple-500"
          >
            Toggle
          </button>
        </div>
        <div className="mt-[3rem] p-4 bg-cyan-400 text-black rounded-md w-fit">
          <p>Real World Hook 🔥 — useFetch</p>

          {data.map((item) => {
            return <h1> {item.name}</h1>;
          })}

          {/* <Lifecycle /> */}
        </div>
      </div>
    </>
  );
}

export default App;
