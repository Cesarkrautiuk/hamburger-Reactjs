import styled from "styled-components";

export const Box = styled.div`
  height: calc(100vh - 60px);
  width: 100%;
  background: #000000;
  display: flex;
  color: #fff;
  scroll-behavior: smooth;
  @media (max-width: 768px) {
    height: 100%;
  }
`;
export const Description = styled.div`
  width: 38%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 4rem;
  h1 {
    color: #ffb22f;
    font-family: "Staatliches", cursive;
    font-size: 6rem;
    line-height: 93.39%;
  }
  p {
    font-family: "Sniglet", cursive;
    width: 21rem;
    color: #aa9d9d;
    margin-top: 0.5rem;
  }
  button {
    margin-top: 1.5rem;
    width: 14rem;
    height: 3.8rem;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 1.1rem;
  }
  @media (max-width: 768px) {
    width: 33vw;
    h1 {
      font-size: 4.4rem;
      line-height: 93.39%;
      margin-top: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 500px) {
    width: 80vw;
    display: block;
    margin-left: 0;
    margin: 0 auto;
    h1 {
      font-size: 4.3rem;
      line-height: 93.39%;
      margin-top: 2rem;
    }
    p {
      font-family: "Sniglet", cursive;
      color: #aa9d9d;
      font-size: 1.1rem;
    }
  }
`;
export const BoxImg = styled.div`
  width: 63%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 500px) {
    display: none;
  }
`;
export const OnionImg = styled.img`
  width: 24%;
  margin-left: 19rem;
`;
export const BurgerImg = styled.img`
  @media (max-width: 768px) {
    width: 500px;
  }
`;

export const Content = styled.div`
  width: 100%;
  background: #000000;
`;
export const H3 = styled.h3`
  width: 93%;
  color: #fff;
  font-family: "Roboto", sans-serif;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  padding-top: 2.8rem;
  font-size: 0.95rem;
  &::before {
    content: "";
    height: 1px;
    width: 2.8rem;
    background: #ffb22f;
    display: inline-block;
    margin-right: 0.5rem;
    margin-left: 1.3rem;
  }
  &::after {
    content: "";
    height: 1px;
    color: #fff;
    flex: 0.98;
    background: #ffb22f;
    display: inline-block;
    margin-left: 0.5rem;
  }
  @media (max-width: 500px) {
    width: 99%;
    &::after {
      margin-right: 1rem;
    }
  }
`;
export const Map = styled.div`
  background: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;
  iframe {
    width: 90%;
    height: 17rem;
    border: none;
  }
`;
export const Footer = styled.div`
  width: 100%;
  height: 30vh;
  background: #000000;
  display: flex;
  align-items: center;
  img {
    width: 80%;
  }
  @media (max-width: 500px) {
    img {
      width: 50%;
    }
  }
`;
export const FooterLogo = styled.div`
  width: 89%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 9%;
    margin-left: 10rem;
  }

  @media (max-width: 768px) {
    img {
      width: 14%;
    }
  }
  @media (max-width: 500px) {
    img {
      width: 29%;
    }
  }
`;
