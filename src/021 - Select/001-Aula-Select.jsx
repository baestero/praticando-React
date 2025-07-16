import React from "react";

const App = () => {
  const [select, setSelect] = React.useState("");
  return (
    <form>
      <select
        id="produtos"
        value={select}
        onChange={({ target }) => setSelect(target.value)}
      >
        <option disabled value="">
          Selecione
        </option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">smartphone</option>
        <option value="tablet">tablet</option>
      </select>
      {select}
    </form>
  );
};

export default App;
