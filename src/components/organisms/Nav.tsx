import React, { useContext } from "react";
import { RiHandbagLine } from "react-icons/ri";
import styled from "styled-components";

import HoverHamberger from "../atoms/button/HoverHamburgerBtn";
import NavBtn from "../atoms/button/NavBtn";
import NavList from "../moecules/NavList";
import { isMenuContext } from "../templates/Header";

const Nav = () => {
  const context = useContext(isMenuContext);
  return (
    <NavStyle>
      <ul className="navList">
        <li>
          <HoverHamberger />
        </li>
        {context?.isMenuOn && (
          <li className="middleList">
            <NavList />
          </li>
        )}
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
`;
export default Nav;
