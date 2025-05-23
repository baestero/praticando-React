import React from "react";

const Input2 = ({ id, label, ...props }) => {
  console.log(props);
  return (
    <div style={{ margin: "1rem 0" }}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
    </div>
  );
};

export default Input2;
