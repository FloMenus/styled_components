import React from "react";
import styled from "styled-components";

import HeroSubText from "./HeroSubText";
import HeroText from "./HeroText";
import HeroParagraph from "./HeroParagraph";
import Button from "../Button";

const HeroContainer = () => {
  const HeroContainer = styled.div``;

  return (
    <HeroContainer>
      <HeroSubText text="Hi, my name is" />
      <HeroText text="Brittany Chiang." />
      <HeroText text="I build things for the web." semiOpacity="true" />
      <HeroParagraph />
      <Button text="Check out my course !" />
    </HeroContainer>
  );
};

export default HeroContainer;
