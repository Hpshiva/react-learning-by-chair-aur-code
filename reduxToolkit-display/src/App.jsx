import "./App.css";

import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import Product from "./components/Product";

function App() {
  return (
    <>
      <div className="w-full overflow-hidden h-screen bg-gray-800 flex justify-censter flex-col items-center text-white gap-3">
        <div className="container">
          <div className="py-5">
            <nav className="flex gap-4 py-5">
              <Link to="/">Home</Link>
              <Link to="/user">User</Link>
              <Link to="/product">Product</Link>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user" element={<User />} />
              <Route path="/product" element={<Product />} />
            </Routes>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

export default App;
