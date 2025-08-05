import React from "react";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

const App = () => {
  const [contador, setContador] = React.useState(0);
  const [acertos, setAcertos] = React.useState(0);
  const [resposta, setResposta] = React.useState("");

  const pergunta = perguntas[contador];

  function handleChange({ target }) {
    setResposta(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (resposta === pergunta.resposta) {
      setAcertos((prev) => prev + 1);
    }
    setContador((prev) => prev + 1);
  }

  return (
    <>
      {contador < perguntas.length ? (
        <form onSubmit={handleSubmit}>
          <p>{pergunta.pergunta}</p>
          {pergunta.options.map((alternativa) => {
            return (
              <label key={alternativa}>
                <input
                  name="pergunta"
                  type="radio"
                  onChange={handleChange}
                  checked={resposta === alternativa}
                  value={alternativa}
                  required
                />
                {alternativa}
              </label>
            );
          })}
          <button type="submit">Próxima</button>
        </form>
      ) : (
        <p>
          Você acertou {acertos} de {perguntas.length}
        </p>
      )}
    </>
  );
};

export default App;
