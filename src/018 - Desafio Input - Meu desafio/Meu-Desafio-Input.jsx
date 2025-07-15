import React from "react";

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado
// Essa é a função utilizado para realizar o POST
// Mostre uma mensagem na tela, caso a resposta da API seja positiva

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [cep, setCep] = React.useState("");
  const [rua, setRua] = React.useState("");
  const [numero, setNumero] = React.useState("");
  const [bairro, setBairro] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [estado, setEstado] = React.useState("");
  const [feedback, setFeedback] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    fetchForm();
  }

  async function fetchForm() {
    const data = JSON.stringify({
      nome: nome,
      email: email,
      senha: senha,
      cep: cep,
      rua: rua,
      numero: numero,
      bairro: bairro,
      cidade: cidade,
      estado: estado,
    });

    const response = await fetch(
      "https://ranekapi.origamid.dev/json/api/usuario",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }
    );
    const resultado = await response.json();

    if (resultado.ID !== undefined) {
      setFeedback(true);
    } else {
      setFeedback(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        id="nome"
        name="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        id="senha"
        name="senha"
        value={senha}
        onChange={(event) => setSenha(event.target.value)}
      />
      <label htmlFor="cep">Cep</label>
      <input
        type="number"
        id="cep"
        name="cep"
        value={cep}
        onChange={(event) => setCep(event.target.value)}
      />
      <label htmlFor="nome">Rua</label>
      <input
        type="text"
        id="rua"
        name="rua"
        value={rua}
        onChange={(event) => setRua(event.target.value)}
      />
      <label htmlFor="numero">Número</label>
      <input
        type="text"
        id="numero"
        name="numero"
        value={numero}
        onChange={(event) => setNumero(event.target.value)}
      />
      <label htmlFor="bairro">Bairro</label>
      <input
        type="text"
        id="bairro"
        name="bairro"
        value={bairro}
        onChange={(event) => setBairro(event.target.value)}
      />
      <label htmlFor="cidade">Cidade</label>
      <input
        type="text"
        id="cidade"
        name="cidade"
        value={cidade}
        onChange={(event) => setCidade(event.target.value)}
      />
      <label htmlFor="estado">Estado</label>
      <input
        type="text"
        id="estado"
        name="estado"
        value={estado}
        onChange={(event) => setEstado(event.target.value)}
      />
      {feedback === false && <p>Erro ao enviar Formulário.</p>}
      {feedback === true && <p>Formulário enviado com sucesso!</p>}
      <button>Enviar</button>
    </form>
  );
};

export default App;
