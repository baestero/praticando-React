import React from "react";

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto}, {children}
    </h1>
  );
};

const App = () => {
  return (
    <div>
      <Titulo cor="red" texto="Meu titulo 1">
        Isso é o Children
        <p>Teste</p>
      </Titulo>
      <Titulo cor="blue" texto="Meu titulo 1" />
    </div>
  );
};

export default App;
