import React from "react";
import { NAV_MENU } from "../../schemas";
import NavCart from "../atoms/NavCart";
import NavLink from "../atoms/NavLink";
import NavSearch from "../atoms/NavSearch";

const NavList = () => {
  return (
    <ul>
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
    </ul>
  );
};

export default NavList;
