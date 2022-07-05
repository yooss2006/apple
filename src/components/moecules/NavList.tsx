import React from "react";
import { NAV_MENU } from "../../schemas";
import NavCart from "../atoms/NavCart";
import NavLink from "../atoms/NavLink";
import NavSearch from "../atoms/NavSearch";
import styled from "styled-components";

const NavListStyle = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavList = () => {
  return (
    <NavListStyle>
      {NAV_MENU.map((item) => (
        <li key={item.name}>
          <NavLink path={item.path} content={item.name} />
        </li>
      ))}
      <li>
        <NavSearch />
      </li>
      <li>
        <NavCart />
      </li>
    </NavListStyle>
  );
};

export default NavList;
