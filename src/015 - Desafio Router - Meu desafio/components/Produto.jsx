import React from "react";
import { useParams } from "react-router-dom";

const Produto = () => {
  const [produtoIndividual, setProdutoIndividual] = React.useState(null);
  const params = useParams();
  const id = params.id;

  React.useEffect(() => {
    async function fetchProduto() {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${id}`
      );

      const produtoJson = await response.json();
      setProdutoIndividual(produtoJson);
    }

    fetchProduto();
  }, []);

  return (
    <>
      {produtoIndividual && (
        <div className="produtoIndividual">
          <img src={produtoIndividual.fotos[0].src} alt="" />
          <div>
            <h3>{produtoIndividual.nome}</h3>
            <p className="preco">R$ {produtoIndividual.preco}</p>
            <p>{produtoIndividual.descricao}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Produto;
