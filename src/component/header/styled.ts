import styled, { css } from "styled-components";
type propsHeader = {
  border: boolean;
  scroll?: boolean;
};
export const Menu = styled.header<propsHeader>`
  background: ${(propsHeader) =>
    propsHeader.scroll ? "#000000" : "transparent"};
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5em;
  position: sticky;
  top: 0;
  border-bottom: 1px solid transparent;
  ${(props) =>
    props.border &&
    css`
      border-bottom: 1px solid #262626;
    `};
  nav {
    display: flex;
    align-items: center;
    margin-left: 4rem;
  }
  a {
    color: #ffff;
    font-family: "Roboto", sans-serif;
    margin-left: 0.8rem;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
  }
  div {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 0.7rem;
    svg {
      width: 1.5rem;
      color: #ffff;
    }
  }
  button {
    margin-left: 2rem;
    margin-right: 2rem;
    font-size: clamp(0.85rem, 2.5vw, 0.89rem);
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    padding: 0.6rem 0.9rem;
    background: #ffff;
    border: none;
    border-radius: 0.2rem;
    color: black;
    width: 4rem;
    cursor: pointer;
  }
  @media (max-width: 500px) {
    nav {
      margin-left: 2.3rem;
    }
    a {
      display: none;
    }
    div {
      svg {
        width: 1rem;
        height: 1rem;
      }
    }
  }
`;
export const Span = styled.span`
  color: #fff;
  margin-left: 0.5rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
  cursor: pointer;
`;
export const LogoImg = styled.img`
  width: 21%;
  margin-left: 0.5rem;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 44%;
  }
`;
export const ModalHeader = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;

  svg {
    color: #000000;
  }
  button {
    background: transparent;
    outline: none;
    border: none;
    padding: 1rem 1rem;
  }
`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ButtonEntrar = styled.button`
  width: 72%;
  height: 3.4rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 0.6rem;
  cursor: pointer;
  @media (max-width: 500px) {
    height: 3.8rem;
    font-size: 1.3rem;
  }
`;
export const A = styled.a`
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  font-size: 1.2rem;
  margin-top: 1.1rem;
  color: #000000;
  padding-bottom: 1rem;
  border-bottom: 0.3rem solid transparent;
  cursor: pointer;
  &:hover {
    border-bottom: 0.3rem solid #ffff;
    padding-bottom: 1rem;
  }
  @media (max-width: 500px) {
    font-size: 1.8rem;
  }
`;
