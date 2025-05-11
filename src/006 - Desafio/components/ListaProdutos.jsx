import React from "react";
const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

const estilo = {
  border: "1px solid black",
  padding: "10px 20px",
  marginBottom: "20px",
};

const ListaProdutos = () => {
  return produtos.map(({ nome, propriedades }) => (
    <div style={estilo} key={nome}>
      <p>{nome}</p>
      <ul>
        {propriedades.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </div>
  ));
};

export default ListaProdutos;
