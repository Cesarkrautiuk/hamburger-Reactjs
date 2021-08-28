import Logo from "../../asset/logo.png";
import { MdMenu, MdShoppingCart } from "react-icons/md";
import { Menu, LogoImg, Span } from "./styled";
import { HTMLAttributes } from "react";
type Props = HTMLAttributes<HTMLHeadElement> & {
  border: boolean;
};
export function Header({ border, ...rest }: Props) {
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
          <Span>0</Span>
          <button>Entrar</button>
        </div>
      </Menu>
    </>
  );
}
