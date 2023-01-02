import React from "react";
import styled from "styled-components";

import NavLink from "./NavLink";
import Button from "../Button";

import { Md } from "../../style/spacings";

const NavLinksContainer = () => {
  const NavLinksContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${Md};
  `;
  return (
    <NavLinksContainer>
      <NavLink number="01." text="About" />
      <NavLink number="02." text="Experience" />
      <NavLink number="03." text="Work" />
      <NavLink number="04." text="Contact" />
      <Button text="Resume" size="little" />
    </NavLinksContainer>
  );
};

export default NavLinksContainer;
