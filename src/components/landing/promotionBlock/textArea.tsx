import React from "react";
import styled from "styled-components";
import { moveUp } from "../../../styles/animation/animationPalette";

interface TextProperty {
  main: string;
  txt: string;
}

const MainText = styled.div`
  font-size: 2em;
  margin-bottom: 30px;
`;

const TextContainer = styled.div`
  position: absolute;
  right: 40px;
  top: 30%;
  width: 60%;
  height: auto;
  color: white;
  font-size: 1em;
  z-index: 2;
  animation: moveUp 1s 1 linear alternate;
  ${moveUp}
`;

const PromotionText = ({ main, txt }: TextProperty) => {
  return (
    <TextContainer>
      <MainText>{main}</MainText>
      {txt}
    </TextContainer>
  );
};

export default PromotionText;
