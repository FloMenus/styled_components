import React from "react";
import styled from "styled-components";

import { lightgreen } from "../../style/colors";

const HeroSubText = (props) => {
  const { text } = props;
  const HeroSubText = styled.h2`
    color: ${lightgreen};
  `;
  return <HeroSubText>{text}</HeroSubText>;
};

export default HeroSubText;
