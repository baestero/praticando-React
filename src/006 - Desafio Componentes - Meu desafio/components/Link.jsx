import React from "react";

const Link = ({ href, children }) => {
  return <a href={href}>{children}</a>;
};

export default Link;
