import React from "react";
import styled from "styled-components";

import { transparentLightblue } from "../../style/colors";

const HeroSubText = (props) => {
  const { text } = props;
  const HeroSubText = styled.p`
    color: ${transparentLightblue};
    font-size: 24px;
    text-decoration: none;
  `;
  return (
    <HeroSubText>
      I’m a software engineer specializing in building (and occasionally
      designing) exceptional digital experiences. Currently, I’m focused on
      building accessible, human-centered products at{" "}
      <a href="#">Upstatement</a>.
    </HeroSubText>
  );
};

export default HeroSubText;
