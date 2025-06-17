import React from "react";
import { useNavigate } from "react-router-dom";
import Head from "./Head";

const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    console.log("fazer Login");
    navigate("/");
  }

  return (
    <div>
      <Head title="Login" description="Essa é a descrição da Login" />
      <h1>Login</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
