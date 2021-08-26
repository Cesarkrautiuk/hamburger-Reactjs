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
  @media (max-width: 768px) {
    display: none;
  }
`;
export const OnionImg = styled.img`
  width: 24%;
  margin-left: 19rem;
`;
export const BurgerImg = styled.img``;

export const Content = styled.div`
  width: 100%;
  background: #000000;
`;
