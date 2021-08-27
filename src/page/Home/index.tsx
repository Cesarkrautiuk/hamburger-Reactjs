import { GlobalStyle } from "../../styles/global";
import ImgBurger from "../../asset/burger.png";
import Onion from "../../asset/onion.png";
import ImgFooter from "../../asset/imgFunter.png";
import { Header } from "../../component/header";
import { CadBox } from "../../component/cadBox";
import { lista } from "../../banco/estaComPressa";
import Logo from "../../asset/logo.png";
import {
  Box,
  BurgerImg,
  Description,
  BoxImg,
  OnionImg,
  Content,
  H3,
  Map,
  Footer,
  FooterLogo,
} from "./styled";
import { Item } from "../../component/itemBoxCard";

export function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Box>
        <Description>
          <h1>Hambúrguer caseiro</h1>
          <p>
            Pão Australiano, Maionese da Casa, Hambúrguer, Cheddar, Cebola
            caramelizada e Bacon crocante...
          </p>
          <button>Cardápio</button>
        </Description>
        <BoxImg>
          <BurgerImg src={ImgBurger} />
          <OnionImg src={Onion} />
        </BoxImg>
      </Box>
      <Content>
        <CadBox title="Está com pressa">
          {lista.map((item) => {
            return (
              <Item
                key={item.title}
                title={item.title}
                text={item.drecription}
                img={item.img}
                price={item.price}
              />
            );
          })}
        </CadBox>
        <CadBox title="Promoção">
          {lista.map((item) => {
            return (
              <Item
                key={item.title}
                title={item.title}
                text={item.drecription}
                img={item.img}
                price={item.price}
              />
            );
          })}
        </CadBox>
      </Content>
      <Map>
        <H3>Localização</H3>
        <iframe
          title="Map"
          key="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14452.896392411285!2d-50.169500124107294!3d-25.09427436069912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81a41af2e9b8b%3A0x26026dc9020b2b80!2sCentro%2C%20Ponta%20Grossa%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1630017583554!5m2!1spt-BR!2sbr"
        ></iframe>
      </Map>
      <Footer>
        <FooterLogo>
          <img src={Logo} alt="Logo" />
        </FooterLogo>
        <div>
          <img src={ImgFooter} alt="img" />
        </div>
      </Footer>
    </>
  );
}
