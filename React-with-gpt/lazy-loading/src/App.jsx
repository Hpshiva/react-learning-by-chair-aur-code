import { lazy, Suspense, useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";

const PreLoadDashboard = () => import("./components/Dashboard");

const Users = lazy(() => import("./components/Users"));
const Setting = lazy(() => import("./components/Setting"));

function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const one = () => {
    setShowDashboard((prev) => !prev);
    setShowUsers(false);
    setShowSettings(false);
  };
  const two = () => {
    setShowUsers((prev) => !prev);
    setShowDashboard(false);
    setShowSettings(false);
  };
  const three = () => {
    setShowSettings((prev) => !prev);
    setShowUsers(false);
    setShowDashboard(false);
  };
  return (
    <div className="h-screen w-full flex flex-col gap-4 bg-pink-200 p-[1rem] ">
      <button
        onMouseEnter={PreLoadDashboard}
        onClick={() => one()}
        className="px-5 py-2 bg-green-500 rounded-md"
      >
        Open DashBoard
      </button>
      <button
        onClick={() => two()}
        className="px-5 py-2 bg-green-500 rounded-md"
      >
        Open Users
      </button>
      <button
        onClick={() => three()}
        className="px-5 py-2 bg-green-500 rounded-md"
      >
        Open Settings
      </button>

      <Suspense fallback={<h1>Loading Analytics...</h1>}>
        {showDashboard && <Dashboard />}
      </Suspense>
      <Suspense fallback={<h1>Loading Users...</h1>}>
        {showUsers && <Users />}
      </Suspense>
      <Suspense fallback={<h1>Loading Settings...</h1>}>
        {showSettings && <Setting />}
      </Suspense>
    </div>
  );
}

export default App;
