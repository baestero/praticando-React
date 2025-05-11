import React from "react";
import Link from "./components/Link";
import Home from "./components/Home";
import Produto from "./components/Produtos";
// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

const { pathname } = window.location;
console.log(pathname);

const App = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/produtos">Produtos</Link>
        </li>
      </ul>
      {pathname === "/" ? <Home /> : <Produto />}
    </>
  );
};

export default App;
