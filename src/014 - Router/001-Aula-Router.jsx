import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Header from "./components/Header";
import NaoEncontrado from "./components/NaoEncontrado";
import Login from "./components/Login";
import Produto from "./components/Produto";
import "./components/Router.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Sobre" element={<Sobre />} />
        <Route path="Login" element={<Login />} />
        <Route path="Produto/:id/*" element={<Produto />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
