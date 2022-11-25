import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Routes from "./services/routes";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>
);
