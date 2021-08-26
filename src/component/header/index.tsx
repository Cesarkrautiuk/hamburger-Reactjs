import Logo from "../../asset/logo.png";
import { MdMenu, MdShoppingCart } from "react-icons/md";
import { Menu, LogoImg, Span } from "./styled";
export function Header() {
  return (
    <>
      <Menu>
        <nav>
          <MdMenu color="#ffff" size="42" />
          <LogoImg src={Logo} />
          <a>Sobre</a>
          <a>Cardápio</a>
          <a>Promoção</a>
        </nav>
        <div>
          <MdShoppingCart size="22" color="#fff" />
          <Span>0</Span>
          <button>Entrar</button>
        </div>
      </Menu>
    </>
  );
}
