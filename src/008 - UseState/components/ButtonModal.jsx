import React from "react";

const ButtonModal = ({ setModal }) => {
  function handleClick() {
    //utilizando callback para ter valor anterior
    setModal((ativo) => !ativo);
  }
  return <button onClick={handleClick}>Abrir</button>;
};

export default ButtonModal;
