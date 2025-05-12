import React from "react";
import ListaProdutos from "./ListaProdutos";

const { pathname } = window.location;
console.log(pathname);

const Produtos = () => {
  return (
    <>
      <h3 style={{ color: "green" }}>Produtos</h3>
      <ListaProdutos />
    </>
  );
};

export default Produtos;
