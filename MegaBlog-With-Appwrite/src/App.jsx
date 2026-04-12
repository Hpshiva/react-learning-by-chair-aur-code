import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components/index";
import { Outlet } from "react-router-dom";
function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL);

  // loading here bcz data is not in local right its in appwrite
  // it will take some time so yeah for that loading we are using
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="h-screen w-full bg-gray-700 text-white flex flex-col justify-center items-center">
      <Header />
      <h1 className="text-2xl">shiva</h1>
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  ) : null;
}

export default App;
