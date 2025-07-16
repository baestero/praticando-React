import React from "react";

// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

const App = () => {
  const [cores, setCores] = React.useState(["azul"]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  console.log(cores);

  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="azul"
          checked={handleChecked("azul")}
          onChange={handleChange}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={handleChecked("vermelho")}
          onChange={handleChange}
        />
        Vermelho
      </label>
    </form>
  );
};

export default App;
