import React from "react";
import styled from "styled-components";

import { lightblue, lightgreen } from "../../style/colors";
import { Xxs } from "../../style/spacings";
import { quickTransition } from "../../style/transitionTime";

const NavLink = (props) => {
  const { number, text } = props;
  const NavLink = styled.a`
    color: ${lightblue};
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: ${Xxs};
    transition: ${quickTransition};
  `;
  const Number = styled.span`
    color: ${lightgreen};
  `;
  const Text = styled.p`
    color: ${lightblue};
    transition: ${quickTransition};
    &:hover {
      color: ${lightgreen};
    }
  `;
  return (
    <>
      <NavLink href="#">
        <Number>{number}</Number>
        <Text>{text}</Text>
      </NavLink>
    </>
  );
};

export default NavLink;
