import React from "react";

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
    cor.includes(cor);
  }

  console.log(cores);

  return (
    <form>
      {coresArray.map((cor) => {
        return (
          <label key={cor} style={{ textTransform: "capitalize" }}>
            <input
              type="checkbox"
              value={cor}
              checked={cores.includes(cor)}
              onChange={handleChange}
            />
            {cor}
          </label>
        );
      })}
    </form>
  );
};

export default App;
