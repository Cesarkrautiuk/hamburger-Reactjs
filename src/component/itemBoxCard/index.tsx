import { Img, H4, Span, P, Button, Content } from "./styled";

type PropsItem = {
  title: string;
  text: string;
  img: string;
  price: string;
};
export function Item({ title, text, img, price }: PropsItem) {
  return (
    <Content>
      <Img src={img} />
      <H4>{title} </H4>
      <P>{text}</P>
      <Span>{price}</Span>
      <Button>Comprar</Button>
    </Content>
  );
}
