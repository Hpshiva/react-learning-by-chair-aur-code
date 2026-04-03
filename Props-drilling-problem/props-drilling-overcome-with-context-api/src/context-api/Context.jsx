import React from "react";

import { createContext } from "react";
import { useState } from "react";
export const UserContext = createContext();
function Context({ children }) {
  const [user, setUser ] = useState([
    { id: 0, name: "shiva", age: 34 },
    { id: 1, name: "chai", age: 35 },
    { id: 2, name: "aur code", age: 22 },
  ]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default Context;
