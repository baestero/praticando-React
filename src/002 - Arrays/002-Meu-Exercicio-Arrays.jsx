import React from "react";

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    nome: "Tablet",
    preco: "R$ 1500",
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];

const App = () => {
  //aqui eu clonei a array com map e spread ...item
  // e só alterei os precos para ser limpos
  const precoLimpo = produtos.map((item) => ({
    ...item,
    preco: Number(item.preco.replace("R$ ", "")),
  }));

  return (
    <section>
      {precoLimpo
        .filter(({ preco }) => preco > 1500)
        .map(({ id, nome, preco, cores }) => (
          <div key={id}>
            <h1>{nome}</h1>
            <p>Preço: {preco}</p>
            {cores.map((cor) => (
              <li
                key={cor}
                style={{ background: cor, color: "white", listStyle: "none" }}
              >
                {cor}
              </li>
            ))}
          </div>
        ))}
    </section>
  );
};

export default App;
