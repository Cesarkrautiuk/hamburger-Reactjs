import { HtmlHTMLAttributes } from "react";
import styled from "styled-components";
import MenuImg from "../../asset/menu.png";
export const MenuTop = styled.div`
  background: url(${MenuImg}) no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 37vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #000000 1%, transparent);
  }
  @media (max-width: 768px) {
    height: 20vh;
  }
  @media (max-width: 500px) {
    height: 20vh;
  }
`;
export const H1 = styled.h1`
  font-family: "Staatliches", cursive;
  font-weight: 700;
  color: #ffb22f;
  font-size: 4.2rem;
  margin-top: 1.3rem;
  @media (max-width: 500px) {
    font-size: 3.3rem;
    margin: 0;
  }
`;
export const Content = styled.div`
  h3 {
    display: none;
  }
`;
export const Nav = styled.div`
  margin-left: 4rem;
  margin-top: 0.3rem;
  margin-bottom: 0.9rem;
  .ative {
    border-bottom: 4px solid #ffb22f;
  }
`;
export const A = styled.a`
  color: #fff;
  margin-left: 0.7rem;
  font-family: "Roboto", sans-serif;
  font-size: 1.03rem;
  cursor: pointer;
`;
