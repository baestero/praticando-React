import React from "react";

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const dados = luana;

  const estilo = {
    color: dados.ativa === true ? "green" : "red",
  };

  const totalGasto = dados.compras.reduce((soma, item) => {
    const valorLimpo = Number(item.preco.replace("R$", ""));
    return soma + valorLimpo;
  }, 0);

  const controleDeGastos = () => {
    return totalGasto > 10000 ? "Você está gastando muito" : "";
  };

  const statusSituação = (situação) => {
    return situação === true ? (
      <span style={estilo}>Ativo</span>
    ) : (
      <span style={estilo}>Inativo</span>
    );
  };

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>Situação: {statusSituação(dados.ativa)}</p>
      <p>Total gasto: {totalGasto}</p>
      <p>{controleDeGastos()}</p>
    </div>
  );
};

export default App;
