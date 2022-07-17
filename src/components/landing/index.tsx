import React from "react";
import styled from "styled-components";
import PromotionBlock from "./promotionBlock";
import Logo from "../common/logo";
import ImageContainer from "./promotionBlock/imageContainer";
import TextArea from "./promotionBlock/textArea";
import src from "../../asset/img/promotion/promotion1.png";

const Landing = styled.div`
  width: 960px;
  height: auto;
  margin: auto;
  text-align: center;
`;

const LandingPage = () => {
  return (
    <Landing>
      <Logo />
      <PromotionBlock>
        <ImageContainer imgSrc={src} />
        <TextArea
          main="제목"
          txt="내용이 길면 어떻게 될지 생각해보신 적 있으신가요? 노래를 만들고자 하는 의미를 알고 다가온다면 당신은 참 똑똑한 사람이에요"
        />
      </PromotionBlock>
    </Landing>
  );
};

export default LandingPage;
