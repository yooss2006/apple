import React from "react";
import { Link } from "react-router-dom";

type NavLinkProps = {
  path: string;
  content: string;
};

const NavLink = ({ path, content }: NavLinkProps) => {
  return <Link to={path}>{content}</Link>;
};

export default NavLink;
