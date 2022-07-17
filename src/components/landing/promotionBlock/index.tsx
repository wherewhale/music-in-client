import React from "react";
import styled from "styled-components";

interface PromotionSrc {
  children?: React.ReactNode;
}

const PromotionBlock = styled.div`
  position: relative;
  width: 98%;
  height: 500px;
  margin: auto;
  background: ${(props) => props.color || "black"};
`;

const LandingPromotion = ({ children }: PromotionSrc) => {
  return <PromotionBlock>{children}</PromotionBlock>;
};

export default LandingPromotion;
