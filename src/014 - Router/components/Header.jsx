import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log("Mudou a rota");
  }, [location]);

  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "tomato" : "",
        })}
        end
      >
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink
        to="Sobre"
        style={({ isActive }) => ({
          color: isActive ? "tomato" : "",
        })}
      >
        Sobre
      </NavLink>{" "}
      |{" "}
      <NavLink
        to="Login"
        style={({ isActive }) => ({
          color: isActive ? "tomato" : "",
        })}
      >
        Login
      </NavLink>
    </nav>
  );
};

export default Header;
