import React from "react";

const ProdutoCorreção = ({ dados }) => {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>{dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </div>
  );
};

export default ProdutoCorreção;
