import { Header } from "../../component/header";
import { ListerScroll } from "../../hooks/scrolListerner";
import { useShoppingCart } from "../../hooks/useShoppingCart";
import { lista } from "../../banco/estaComPressa";
import {
  Content,
  Shopping,
  SummaryPurchase,
  ListShopping,
  H2Shopping,
  Img,
  H3Shopping,
  BoxSummaryPurchase,
  H2SummaryPurchase,
  Buttom,
} from "./styled";
import { useMemo, useState } from "react";
type ListaType = {
  id: string;
  img: string;
  price: string;
  title: string;
  qt: string;
};
export function ShoppingCart() {
  const { herderBorber, scroll } = ListerScroll();
  const { shopping } = useShoppingCart();
  const [cards, setCards] = useState<ListaType[]>([]);
  useMemo(() => {
    let result: ListaType[] = [];
    shopping.forEach((item) => {
      lista.forEach((items) => {
        if (item.id === items.id) {
          let newOject: ListaType = {
            id: items.id,
            img: items.img,
            price: items.price,
            title: items.title,
            qt: item.qt,
          };
          result.push(newOject);
        }
      });
    });
    setCards(result);
  }, [setCards, shopping]);
  return (
    <>
      <Header scroll={scroll} border={herderBorber} />
      <Content>
        <Shopping>
          <H2Shopping>Meu carrinho</H2Shopping>
          <ListShopping>
            <thead>
              <tr>
                <th></th>
                <th>Produto</th>
                <th>qtd</th>
                <th>Preco</th>
              </tr>
            </thead>
            <tbody>
              {cards.map((item) => {
                return (
                  <tr>
                    <td>
                      <Img src={item.img} alt={item.title} />
                    </td>
                    <td>
                      <span>{item.title}</span>
                    </td>
                    <td>
                      <p>{item.qt}</p>
                    </td>
                    <td>
                      <H3Shopping>{item.price}</H3Shopping>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </ListShopping>
        </Shopping>
        <SummaryPurchase>
          <H2SummaryPurchase>Resumo do pedido</H2SummaryPurchase>
          <BoxSummaryPurchase></BoxSummaryPurchase>
          <Buttom>Finalizar pedido</Buttom>
        </SummaryPurchase>
      </Content>
    </>
  );
}
