import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/main.scss";

const element = document.getElementById("root");
if (element.hasChildNodes()) hydrateRoot(element, <App />);
else createRoot(element).render(<App />);
