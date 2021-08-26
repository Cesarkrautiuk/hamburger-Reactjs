import styled from "styled-components";

export const Menu = styled.header`
  background: #000000;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5em;
  position: sticky;
  top: 0;
  nav {
    display: flex;
    align-items: center;
    margin-left: 4rem;
    margin-top: 1rem;
  }
  a {
    color: #ffff;
    font-family: "Roboto", sans-serif;
    margin-left: 0.8rem;
    font-size: 1rem;
    font-weight: 500;
  }
  div {
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }
  button {
    margin-left: 2rem;
    margin-right: 2rem;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    padding: 0.6rem 0.9rem;
    background: #ffff;
    border: none;
    border-radius: 0.2rem;
    color: black;
  }
`;
export const Span = styled.span`
  color: #fff;
  margin-left: 0.5rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
`;
export const LogoImg = styled.img`
  width: 21%;
  margin-left: 0.5rem; ;
`;
