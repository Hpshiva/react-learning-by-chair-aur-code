import "./App.css";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  function btnHandle() {
    alert("btn Clicked");
  }
  return (
    <>
      <div className="w-full text-white h-screen p-[2rem] bg-red-500">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
}

export default App;
