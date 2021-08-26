import buger3 from "../../asset/buger3.png";
import { Img, H4, Span, P, Button, Content } from "./styled";
export function Item() {
  return (
    <Content>
      <Img src={buger3} />
      <H4>Hambúrguer caseiro </H4>
      <P>
        Pão Australiano, Maionese da Casa, Hambúrguer, Cheddar, Cebola
        caramelizada e Bacon crocante...
      </P>
      <Span>R$ 23,00</Span>
      <Button>Comprar</Button>
    </Content>
  );
}
