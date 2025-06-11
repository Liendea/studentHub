import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { RegistrationProvider } from "./context/RegistrationContext";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter
      basename={import.meta.env.MODE === "production" ? "/studentHub" : ""}
    >
      <RegistrationProvider>
        <App />
      </RegistrationProvider>
    </BrowserRouter>
  </StrictMode>
);
