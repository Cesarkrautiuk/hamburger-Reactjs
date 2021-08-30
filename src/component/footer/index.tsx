import Logo from "../../asset/logo.png";
import ImgFooter from "../../asset/imgFunter.png";
import { Content, FooterLogo } from "./styled";
export function Footer() {
  return (
    <Content>
      <FooterLogo>
        <img src={Logo} alt="Logo" />
      </FooterLogo>
      <div>
        <img src={ImgFooter} alt="img" />
      </div>
    </Content>
  );
}
