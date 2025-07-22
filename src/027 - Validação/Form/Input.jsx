import React from "react";

const Input = ({ id, label, onChange, ...props }) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      <input type="text" id={id} name={id} onChange={onChange} {...props} />
    </>
  );
};

export default Input;
