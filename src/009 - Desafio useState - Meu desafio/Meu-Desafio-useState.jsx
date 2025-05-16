import React from "react";

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const App = () => {
  let [nome, setNome] = React.useState(null);
  let [preco, setPreco] = React.useState(null);
  let [foto, setFoto] = React.useState(null);

  function apiClick(event) {
    async function apiNotebook() {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
      );
      return await response.json();
    }

    apiNotebook().then((r) => {
      nome = r.nome;
      preco = r.preco;
      foto = r.fotos[0].src;
      setNome(nome);
      setPreco("R$ " + preco);
      setFoto(foto);
    });
  }

  return (
    <div>
      <button style={{ margin: ".5rem" }} onClick={apiClick}>
        notebook
      </button>
      <button style={{ margin: ".5rem" }} onClick={apiClick}>
        smartphone
      </button>
      <button style={{ margin: ".5rem" }} onClick={apiClick}>
        tablet
      </button>
      <h1>{nome}</h1>
      <p>{preco}</p>
      <img src={foto} alt="" />
    </div>
  );
};

export default App;
