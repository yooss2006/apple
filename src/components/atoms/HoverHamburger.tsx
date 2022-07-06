import React, { useState } from "react";
import styled from "styled-components";

const HoverHamberger = () => {
  const [onHiddenMenu, setOnHiddenMenu] = useState(false);
  const handleHiddenMenu = () => {
    setOnHiddenMenu((prev) => !prev);
  };
  return (
    <HamburgerStyle type="button" onClick={handleHiddenMenu}>
      <p className="blind">{onHiddenMenu ? "닫기" : "목록"}</p>
      <div
        className={["line", "top", onHiddenMenu ? "on" : ""].join(" ")}
      ></div>
      <div
        className={["line", "buttom", onHiddenMenu ? "on" : ""].join(" ")}
      ></div>
    </HamburgerStyle>
  );
};

const HamburgerStyle = styled.button`
  display: none;
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  :hover .line {
    background-color: white;
  }
  .line {
    width: 100%;
    height: 2px;
    position: absolute;
    background-color: #bdbdbd;
    transition: 0.3s all;
  }
  .line.top {
    left: 0;
    top: 4px;
  }
  .line.buttom {
    left: 0;
    bottom: 4px;
  }
  .on.line {
    /* top: calc(50% - 1px); */
    top: 50%;
    left: -2px;
    bottom: 0;
    transform: translateY(-50%);
  }
  .on.line.top {
    transform: rotate(45deg);
  }
  .on.line.buttom {
    transform: rotate(-45deg);
  }
  @media (max-width: 833px) {
    display: block;
  }
`;

export default HoverHamberger;
