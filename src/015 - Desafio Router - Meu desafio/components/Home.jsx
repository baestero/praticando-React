import React from "react";
import { NavLink } from "react-router-dom";
import "../Meu-Desafio-Router.css";

const Home = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    async function fetchProdutos() {
      const response = await fetch(
        "https://ranekapi.origamid.dev/json/api/produto"
      );
      const produtosJson = await response.json();
      setProduto(produtosJson);
    }
    fetchProdutos();
  }, []);

  return (
    <div>
      <div className="produtoContainer">
        {produto &&
          produto.map((p) => {
            return (
              <NavLink key={p.id} to={`produto/${p.id}`}>
                <div className="produto">
                  <img src={p.fotos[0].src} alt={p.id} />
                  <h3>{p.nome}</h3>
                </div>
              </NavLink>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
