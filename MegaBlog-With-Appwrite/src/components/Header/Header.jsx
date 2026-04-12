import React from "react";
import Container from "../index";
import LogoutBtn from "./LogoutBtn";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo";
function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItems = [
    {
      name: "home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "SignUp",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: !authStatus,
    },
  ];
  return (
    <>
      <header className="bg-gray-600 py-3 shadow">
        <Container>
          <nav className="flex">
            <div className="mr-4">
              <Link to="/">
                <Logo />
              </Link>
            </div>

            <div>
              <ul className="flex ml-auto">
                {navItems.map((item) =>
                  item.active ? (
                    <li key={item.name}>
                      <button
                        onClick={() => navigate(item.slug)}
                        className="border-0 rounded-md py-2 px-5 bg-green-500 hover:bg-green-300"
                      >
                        {item.name}
                      </button>
                    </li>
                  ) : null,
                )}
                {authStatus && (
                  <li>
                    <LogoutBtn />
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
}

export default Header;
