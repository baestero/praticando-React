import React from "react";
import { Link } from "react-router-dom";
import Head from "./Head";

const Home = () => {
  return (
    <div>
      <Head title="Home" description="Essa é a descrição da Home" />
      <h1>Home</h1>
      <p>Essa é a Home</p>
      <Link to={"Produto/notebook"}>Notebok</Link>
      {" | "}
      <Link to={"Produto/smartphone"}>Smartphone</Link>
    </div>
  );
};

export default Home;
