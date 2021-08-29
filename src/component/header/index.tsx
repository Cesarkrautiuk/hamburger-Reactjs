import Logo from "../../asset/logo.png";
import { MdMenu, MdShoppingCart } from "react-icons/md";
import { Menu, LogoImg, Span } from "./styled";
import { HTMLAttributes } from "react";
import { useShoppingCart } from "../../hooks/useShoppingCart";
type Props = HTMLAttributes<HTMLHeadElement> & {
  border: boolean;
  scroll?: boolean;
};
export function Header({ border, ...rest }: Props) {
  const { shopping } = useShoppingCart();
  return (
    <>
      <Menu border={border} {...rest}>
        <nav>
          <MdMenu color="#ffff" size="42" />
          <LogoImg src={Logo} />
          <a href="##">Sobre</a>
          <a href="##">Cardápio</a>
          <a href="##"> Promoção</a>
        </nav>
        <div>
          <MdShoppingCart />
          <Span>{shopping.length}</Span>
          <button>Entrar</button>
        </div>
      </Menu>
    </>
  );
}
