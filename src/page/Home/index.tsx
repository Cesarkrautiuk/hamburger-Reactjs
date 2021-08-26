import { GlobalStyle } from "../../styles/global";
import ImgBurger from "../../asset/burger.png";
import Onion from "../../asset/onion.png";
import { Header } from "../../component/header";
import { CadBox } from "../../component/cadBox";
import {
  Box,
  BurgerImg,
  Description,
  BoxImg,
  OnionImg,
  Content,
} from "./styled";

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
        <CadBox title="Está com pressa" />
        <CadBox title="Promoção" />
      </Content>
    </>
  );
}
