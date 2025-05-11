import React from "react";
import Header from "./header";
import Footer from "./footer";
import Form from "./Form/Form";
//usar rafce para agilizar a criação da estrutura do component

const Teste = () => {
  const active = false;
  if (active) {
    return <p>teste</p>;
  }
  return null;
};

const App = () => {
  return (
    <>
      <Teste />
      <Header />
      <Form />
      <Form />
      <Footer />
    </>
  );
};

export default App;
