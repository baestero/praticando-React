import React from "react";

const titulo = <h1>Esse é um titulo</h1>;

const App = () => {
  const random = Math.random();
  const ativo = true;

  function mostrarNome(sobrenome) {
    return `André ${sobrenome}`;
  }

  const estiloP = {
    color: "blue",
    fontSize: "2rem",
  };

  const carro = {
    marca: "fiat",
    rodas: "4",
  };
  return (
    <React.Fragment>
      <a
        className="ativo"
        href="https://www.origamid.com/"
        title="Isso é um site"
        target="blank"
      >
        Origamid
      </a>

      <label htmlFor="nome">nome</label>
      <input type="text" id="nome" />

      {titulo}

      <p>
        {false ? "é verdade" : "é falso"} - {10} - {mostrarNome("luiz")}
      </p>

      <p style={estiloP}>{new Date().getFullYear()}</p>

      <p style={estiloP}>
        Marca: {carro.marca} <br /> Rodas: {carro.rodas}
      </p>

      <p className={ativo ? "ativo" : "inativo"}>{random * 100}</p>
    </React.Fragment>
  );
};

export default App;
