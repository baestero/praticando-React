import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Head from "./components/Head";
import "./Meu-Desafio-Router.css";
import Home from "./components/Home";
import Contato from "./components/Contato";
import Produto from "./components/Produto";

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

const App = () => {
  return (
    <BrowserRouter>
      <Head title={"Raneki"} />
      <div className={"produtoContainer "}>
        <NavLink to={""}>
          <button>Produto</button>
        </NavLink>
        <NavLink to="/contato">
          <button>Contato</button>
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="Produto/:id/*" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
