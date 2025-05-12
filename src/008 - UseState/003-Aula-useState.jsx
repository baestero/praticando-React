import React from "react";

const App = () => {
  function handleClick() {
    setItens("Outros");
  }

  const [contar, setContar] = React.useState(1);
  const [itens1, setItens1] = React.useState(["Item 1"]);

  function Add() {
    setContar(contar + 1);
    setItens1([...itens1, "Item " + (contar + 1)]);
  }

  return (
    <div>
      {itens1.map((item) => (
        <li key={item}>{item}</li>
      ))}

      <button onClick={Add}>{contar}</button>
    </div>
  );
};

export default App;
