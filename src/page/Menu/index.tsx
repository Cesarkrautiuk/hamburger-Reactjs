import { Header } from "../../component/header";
import { CadBox } from "../../component/cadBox";
import { Item } from "../../component/itemBoxCard";
import { MenuTop, H1, Content, Nav, A } from "./styled";
import { lista, listDrink } from "../../banco/estaComPressa";
import { useState } from "react";
import { ListerScroll } from "../../hooks/scrolListerner";
import { Footer } from "../../component/footer";
export function Menu() {
  const [typeProduct, SettypeProduct] = useState<string>("lanches");
  const { herderBorber, scroll } = ListerScroll();
  return (
    <>
      <Header scroll={scroll} border={herderBorber} />
      <MenuTop>
        <H1>Cardápio</H1>
        <div />
      </MenuTop>
      <Content>
        <Nav>
          <A
            className={typeProduct === "lanches" ? "ative" : ""}
            onClick={() => SettypeProduct("lanches")}
          >
            Lanches
          </A>
          <A
            className={typeProduct === "drink" ? "ative" : ""}
            onClick={() => SettypeProduct("drink")}
          >
            Bebidas
          </A>
        </Nav>
        {typeProduct !== "drink" ? (
          <CadBox>
            {lista.map((item) => {
              return (
                <Item
                  key={item.id}
                  title={item.title}
                  text={item.drecription}
                  img={item.img}
                  price={item.price}
                  id={item.id}
                />
              );
            })}
          </CadBox>
        ) : (
          <CadBox>
            {listDrink.map((item) => {
              return (
                <Item
                  key={item.id}
                  title={item.title}
                  text={item.drecription}
                  img={item.img}
                  price={item.price}
                  id={item.id}
                />
              );
            })}
          </CadBox>
        )}
      </Content>
      <Footer />
    </>
  );
}
