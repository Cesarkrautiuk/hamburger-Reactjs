import Logo from "../../asset/logo.png";
import { MdMenu, MdShoppingCart, MdClose } from "react-icons/md";
import { Menu, LogoImg, Span, ModalHeader } from "./styled";
import { HTMLAttributes, useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import { useShoppingCart } from "../../hooks/useShoppingCart";
type Props = HTMLAttributes<HTMLHeadElement> & {
  border: boolean;
  scroll?: boolean;
};
export function Header({ border, ...rest }: Props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const { shopping } = useShoppingCart();
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Menu border={border} {...rest}>
        <nav>
          <MdMenu onClick={() => openModal()} color="#ffff" size="42" />
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <ModalHeader>
          <MdClose />
        </ModalHeader>
      </Modal>
    </>
  );
}
