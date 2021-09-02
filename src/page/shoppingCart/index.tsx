import { Header } from "../../component/header";
import { ListerScroll } from "../../hooks/scrolListerner";
import { useShoppingCart } from "../../hooks/useShoppingCart";
import { lista } from "../../banco/estaComPressa";
import { MdAddCircle, MdRemoveCircle, MdClose } from "react-icons/md";
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
  const [total, setTotal] = useState(0);
  const [cards, setCards] = useState<ListaType[]>([]);
  useMemo(() => {
    let result: ListaType[] = [];
    let total = 0;
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
          total += Number(items.price) * Number(item.qt);
          setTotal(total);
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
                      <span> {item.title}</span>
                    </td>
                    <td>
                      <p>
                        <MdAddCircle size="15" />
                        {item.qt}
                        <MdRemoveCircle size="15" />
                      </p>
                    </td>
                    <td>
                      <H3Shopping>R$ {item.price}</H3Shopping>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </ListShopping>
        </Shopping>
        <SummaryPurchase>
          <H2SummaryPurchase>Resumo do pedido</H2SummaryPurchase>
          <BoxSummaryPurchase>
            <span>
              <p>{`${cards.length} Produto`}</p> <p>R$ {total}</p>
            </span>
            <span>
              <p>Frete</p> <p> R$ 00.00 </p>
            </span>
          </BoxSummaryPurchase>
          <Buttom>Finalizar pedido</Buttom>
        </SummaryPurchase>
      </Content>
    </>
  );
}
