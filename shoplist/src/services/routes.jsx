import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/Cadastro";
import Itens from "../pages/Itens/Itens";
import Lista from "../pages/Lista/Lista";

export default function routes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/adicionar-itens" element={<Itens />} />
        <Route path="/lista" element={<Lista />} />
      </Routes>
    </Router>
  );
}
