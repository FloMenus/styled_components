import React from "react";
import styled from "styled-components";

import { lightblue, transparentLightblue } from "../../style/colors";
import { Xs } from "../../style/spacings";

const HeroText = (props) => {
  const { text, semiOpacity } = props;

  const HeroText = styled.h1`
    font-weight: 700;
    font-size: 74px;
    color ${semiOpacity === "true" ? transparentLightblue : lightblue};
    margin: ${Xs} 0;
  `;
  return <HeroText>{text}</HeroText>;
};

export default HeroText;
