import React from "react";

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  // É a mesma coisa que:
  // const ativoArray = React.useState(true);
  //const ativo = ativoArray[0]
  //const setAtivo = ativoArray[01]

  const [dados, setDados] = React.useState({ nome: "André", idade: "30" });

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: "Possui Faculdade" });
  }

  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? "Ativo" : "Inativo"}</button>
    </div>
  );
};

export default App;
