import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import Context from "./context-api/Context.jsx";

createRoot(document.getElementById("root")).render(
  <Context>
    <StrictMode>
      <App />
    </StrictMode>
  </Context>,
);
