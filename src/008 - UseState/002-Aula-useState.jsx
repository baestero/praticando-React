import React from "react";
import ButtonModal from "./components/ButtonModal";
import Modal from "./components/Modal";

const App = () => {
  const [modal, setModal] = React.useState(false);
  const [itens, setItens] = React.useState("Teste");

  function handleClick() {
    setItens("Outros");
  }

  return (
    <div>
      <p>{itens}</p>
      <button onClick={handleClick}>Clicar</button>

      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
};

export default App;
