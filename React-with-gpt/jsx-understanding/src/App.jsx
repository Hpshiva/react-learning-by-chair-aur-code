import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import StateLearning from "./Components/StateLearning";

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const [user, setUser] = useState(true);
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
        <div className="mt-[3rem] p-4 bg-orange-200 text-black rounded-md w-fit">
          <StateLearning />
        </div>
      </div>
    </>
  );
}

export default App;
