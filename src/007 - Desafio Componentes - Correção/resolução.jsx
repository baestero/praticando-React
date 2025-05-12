import React from "react";
import HeaderResolução from "./components/HeaderResolução";
import HomeResolução from "./components/HomeResolução";
import ProdutosResolução from "./components/ProdutosResolução";

const App = () => {
  let Pagina = HomeResolução;
  const { pathname } = window.location;

  if (pathname === "/produtos") {
    Pagina = ProdutosResolução;
  } else {
    Pagina = HomeResolução;
  }

  return (
    <section>
      <HeaderResolução />
      <Pagina />
    </section>
  );
};

export default App;
