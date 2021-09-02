import Logo from "../../asset/logo.png";
import { MdMenu, MdShoppingCart } from "react-icons/md";
import { Menu, LogoImg, Span } from "./styled";
import { HTMLAttributes } from "react";
import { useHistory } from "react-router-dom";
import { useShoppingCart } from "../../hooks/useShoppingCart";
type Props = HTMLAttributes<HTMLHeadElement> & {
  border: boolean;
  scroll?: boolean;
};
export function Header({ border, ...rest }: Props) {
  const history = useHistory();
  const { shopping } = useShoppingCart();
  return (
    <>
      <Menu border={border} {...rest}>
        <nav>
          <MdMenu color="#ffff" size="42" />
          <LogoImg src={Logo} onClick={() => history.push("/home")} />
          <a href="##">Sobre</a>
          <a href="cardapio">Cardápio</a>
          <a href="##"> Promoção</a>
        </nav>
        <div>
          <MdShoppingCart onClick={() => history.push("/shoppingCart")} />
          <Span onClick={() => history.push("/shoppingCart")}>
            {shopping.length}
          </Span>
          <button>Entrar</button>
        </div>
      </Menu>
    </>
  );
}
