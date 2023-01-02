import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import styled from "styled-components";

import { lightgreen, transparentLightgreen } from "../style/colors";
import { littleButton, bigButton } from "../style/spacings";

const GreenLink = (props) => {
  const { size, text } = props;

  const GreenLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    background: "transparent";
    max-width: 200px;
    border: 1px solid ${lightgreen};
    border-radius: 4px;
    color: ${lightgreen};
    padding: ${size === "little" ? littleButton : bigButton};
    text-decoration: none;
    text-align: center;
    transition: 0.2s ease-in-out;
    height: 20px;
    &:hover {
      background: ${transparentLightgreen};
    }
  `;

  return <GreenLink href="#">{text}</GreenLink>;
};

export default GreenLink;
