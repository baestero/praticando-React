import React from "react";
import {
  NavLink,
  Routes,
  Route,
  useLocation,
  useParams,
} from "react-router-dom";
import ProdudoDescricao from "./ProdudoDescricao";
import ProdutoAvaliacao from "./ProdutoAvaliacao";
import ProdutoCustomizado from "./ProdutoCustomizado";

const Produto = () => {
  const params = useParams();
  console.log(params);
  const location = useLocation();
  console.log(location);

  const search = new URLSearchParams(location.search);
  console.log(search.get("q"));
  console.log(search.get("memoria"));

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descricao</NavLink>{" "}
        <NavLink to="Avaliacao">Avaliacao</NavLink>{" "}
        <NavLink to="Customizado">Customizado</NavLink>
      </nav>
      <Routes>
        <Route path="" element={<ProdudoDescricao />} />
        <Route path="Avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="Customizado" element={<ProdutoCustomizado />} />
      </Routes>
    </div>
  );
};

export default Produto;
