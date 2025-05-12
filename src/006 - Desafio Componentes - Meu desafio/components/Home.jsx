import React from "react";
import ListaProdutos from "./ListaProdutos";

const { pathname } = window.location;
console.log(pathname);

const Home = () => {
  return (
    <>
      <h3 style={{ color: "green" }}>Home</h3>
      <p>Essa é a home</p>
    </>
  );
};

export default Home;
