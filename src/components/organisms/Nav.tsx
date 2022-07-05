import React from "react";
import NavList from "../moecules/NavList";
import styled from "styled-components";

const NavStyle = styled.nav`
  flex-basis: 900px;
  a {
    padding 1rem 1rem;
  }
`;
const Nav = () => {
  return (
    <NavStyle>
      <NavList />
    </NavStyle>
  );
};

export default Nav;
