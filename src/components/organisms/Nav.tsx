import React from "react";
import { RiHandbagLine } from "react-icons/ri";
import styled from "styled-components";

import HoverHamberger from "../atoms/button/HoverHamburgerBtn";
import NavBtn from "../atoms/button/NavBtn";
import NavList from "../moecules/NavList";

const Nav = () => {
  return (
    <NavStyle>
      <ul className="navList">
        <li>
          <HoverHamberger />
        </li>
        <li className="middleList">
          <NavList />
        </li>
        <li>
          <NavBtn icon={<RiHandbagLine />} />
        </li>
      </ul>
    </NavStyle>
  );
};

const NavStyle = styled.nav`
  flex: 1;
  a {
    padding: 1rem 1rem;
  }
  .navList {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .middleList {
    flex: 1;
  }
  @media (max-width: 833px) {
    .middleList {
      display: none;
    }
  }
`;
export default Nav;
