import React from "react";
import styled from "styled-components";

import Logo from "../Logo";
import NavLinksContainer from "./NavLinksContainer";

import { Lg } from "../../style/spacings";

const Navbar = () => {
  const Navbar = styled.nav`
    font-family: "SF Mono", sans-serif;
    font-style: normal;
    height: 100px;
    paddding: 0px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0 ${Lg};
  `;
  return (
    <Navbar>
      <Logo />
      <NavLinksContainer />
    </Navbar>
  );
};

export default Navbar;
