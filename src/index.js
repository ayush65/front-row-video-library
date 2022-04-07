import React from "react";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./context/Auth-context";
import { FilterProvider } from "./context/filter-context";

// Call make Server
makeServer();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
     <FilterProvider>
    <App />
    </FilterProvider> 
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
