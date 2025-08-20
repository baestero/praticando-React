import React from "react";

const App = () => {
  const [comentarios, setComentarios] = React.useState(["Teste", "Teste2"]);
  const [input, setInput] = React.useState("");
  const inputElement = React.useRef();

  function handleClick() {
    setComentarios([...comentarios, input]);
    setInput("");
    inputElement.current.focus();
  }

  return (
    <div>
      <ul>
        {comentarios.map((comentario, index) => {
          return <li key={index}>{comentario}</li>;
        })}
      </ul>
      <input
        type="text"
        value={input}
        ref={inputElement}
        onChange={({ target }) => setInput(target.value)}
      />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

export default App;
