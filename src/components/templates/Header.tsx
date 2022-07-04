import React from "react";
import { Link } from "react-router-dom";
import Nav from "../organisms/Nav";
import { AiFillApple } from "react-icons/ai";
const Header = () => {
  return (
    <header>
      <h1>
        <Link to={"/"}>
          <AiFillApple />
        </Link>
      </h1>
      <Nav />
    </header>
  );
};

export default Header;
