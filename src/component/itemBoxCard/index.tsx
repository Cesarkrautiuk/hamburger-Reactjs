import { useShoppingCart } from "../../hooks/useShoppingCart";
import { Img, H4, Span, P, Button, Content } from "./styled";

type PropsItem = {
  title?: string;
  text: string;
  img: string;
  price: string;
  id: string;
};
export function Item({ title, text, img, price, id }: PropsItem) {
  const { setItemShoppingCard } = useShoppingCart();
  function addShoppingCard() {
    setItemShoppingCard({ id: `${id}`, qt: "1" });
  }
  return (
    <Content>
      <Img src={img} />
      <H4>{title} </H4>
      <P>{text}</P>
      <Span>{price}</Span>
      <Button onClick={addShoppingCard}>Comprar</Button>
    </Content>
  );
}
