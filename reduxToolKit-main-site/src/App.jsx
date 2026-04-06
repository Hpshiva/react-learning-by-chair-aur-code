import "./App.css";
import Counter from "./features/counter/Counter";

function App() {
  return (
    <>
      <div className="flex flex-col gap-4">
        {/* <h1 className="text-4xl">shiva</h1> */}
        <Counter />
      </div>
    </>
  );
}

export default App;
