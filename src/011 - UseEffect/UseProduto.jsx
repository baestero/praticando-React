import React from "react";

const UseProduto = () => {
  React.useEffect(() => {
    function handleScroll(event) {
      console.log(event);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "200vh" }}>
      <p>Meu Produto</p>
    </div>
  );
};

export default UseProduto;
