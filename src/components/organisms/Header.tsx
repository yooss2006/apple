import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Nav from "./Nav";
import { AiFillApple } from "react-icons/ai";

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

const HeaderStyle = styled.header`
  background-color: rgba(0, 0, 0, 0.8);
  color: #dbdbdb;
  .container {
    max-width: 980px;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  a {
    display: block;
  }
  a:hover,
  button:hover {
    color: white;
  }
  .title svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  .title a {
    padding: 1rem 1rem;
    margin-right: 2rem;
  }
  @media (max-width: 833px) {
    .title svg {
      width: 2rem;
      height: 2rem;
    }
    .container {
      padding: 8px;
    }
    .container h1 {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export default Header;
