import React from "react";
import styled from "styled-components";

type NavBtnProps = {
  icon: JSX.Element;
};

const NavBtn = ({ icon }: NavBtnProps) => {
  return <NavBtnStyle type="button">{icon}</NavBtnStyle>;
};

const NavBtnStyle = styled.button`
  height: 100%;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export default NavBtn;
