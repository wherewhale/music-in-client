import React from "react";
import styled from "styled-components";
import { fadeOut } from "../../../styles/animation/animationPalette";

interface ContainerSrc {
  imgSrc: string;
}

const Container = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.25;
  resizemode: contain;
  text-align: left;
  position: relative;
  animation: fadeOut 1s 1 linear alternate;
  ${fadeOut}
`;

const ImageContainer = ({ imgSrc }: ContainerSrc) => {
  return <Container src={imgSrc}></Container>;
};

export default ImageContainer;
