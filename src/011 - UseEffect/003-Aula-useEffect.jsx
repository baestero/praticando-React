import React from "react";
import UseProduto from "./UseProduto";

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      {ativo && <UseProduto />}
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </div>
  );
};

export default App;
