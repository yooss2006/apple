import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Nav from "../organisms/Nav";
import { AiFillApple } from "react-icons/ai";

const HeaderStyle = styled.header`
  background-color: rgba(0, 0, 0, 0.8);
  color: #f5f5f7;
  .container {
    max-width: 980px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  a {
    display: block;
  }
  .title svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  .title a {
    display: block;
    padding: 1rem 1rem;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <div className="container">
        <h1 className="title">
          <Link to={"/"}>
            <AiFillApple />
          </Link>
        </h1>
        <Nav />
      </div>
    </HeaderStyle>
  );
};

export default Header;
