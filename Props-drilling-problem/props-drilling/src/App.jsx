import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  const data = "shiva kumar";
  return (
    <>
      <div className="text-4xl bg-red-300 flex justify-center items-center h-screen text-white">
        <div>
          <p>App - props - {data}</p>
          <Dashboard data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
