import React from "react";
import Produto from "./Produto";

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  React.useEffect(() => {
    const produto = localStorage.getItem("produto");

    async function fetchProduto() {
      setCarregando(true);
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${produto}`
      );
      const json = await response.json();
      setDados(json);
      setCarregando(false);
    }

    fetchProduto();
  }, []);

  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );

    const json = await response.json();
    setDados(json);
    setCarregando(false);

    localStorage.setItem("produto", event.target.innerText);
  }

  return (
    <div>
      <h1>
        Preferencia: {carregando && "Carregando ..."}
        {!carregando && dados && dados.nome}
      </h1>
      <button onClick={handleClick} style={{ marginRight: "10px" }}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
      {!carregando && dados && <Produto dados={dados} />}
      {carregando && <p>Carregando ...</p>}
    </div>
  );
};

export default App;
