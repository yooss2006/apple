import React from "react";
import { NAV_MENU } from "../../schemas";
import styled from "styled-components";

import NavLink from "../atoms/NavLink";
import NavBtn from "../atoms/button/NavBtn";
import { AiOutlineSearch } from "react-icons/ai";

const NavList = () => {
  return (
    <NavListStyle>
      {NAV_MENU.map((item) => (
        <li key={item.name}>
          <NavLink path={item.path} content={item.name} />
        </li>
      ))}
      <li>
        <NavBtn icon={<AiOutlineSearch />} />
      </li>
    </NavListStyle>
  );
};

const NavListStyle = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1.5rem;
  li {
    height: 100%;
  }
  @media (max-width: 833px) {
    display: block;
    position: fixed;
    top: 0;
  }
`;

export default NavList;
