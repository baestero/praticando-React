import React from "react";
import Button2 from "./Button2";
import Input2 from "./Input2";

const Form2 = () => {
  const arr = ["item 1", "item 2"];
  return (
    <div>
      <Input2 id="email" label="Email" required />
      <Input2 id="senha" type="password" label="Senha" />
      <Button2 items={arr} />
    </div>
  );
};

export default Form2;
