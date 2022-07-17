import styled from "styled-components";
import LogoSrc from "../../asset/img/common/logo.png";

const LogoBlock = styled.img`
  width: 150px;
  height: 150px;
  margin: 15px;
  cursor: pointer;
`;

const Logo = () => {
  return <LogoBlock src={LogoSrc} />;
};

export default Logo;
