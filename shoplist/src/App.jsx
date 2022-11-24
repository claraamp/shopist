import React from "react";
import { useState } from "react";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Search from "./Components/SearchList/Search";
import PoupUp from "./Components/Popup/Popup.jsx";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}
