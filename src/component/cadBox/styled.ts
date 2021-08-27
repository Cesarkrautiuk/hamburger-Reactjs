import styled from "styled-components";

export const Content = styled.div`
  max-width: 1220px;
  width: 100%;
  margin: 0 auto;
  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 800px) {
    > div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 500px) {
    > div {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      justify-items: center;
    }
  }
`;

export const H3 = styled.h3`
  width: 100%;
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
    width: 3.2rem;
    background: #ffb22f;
    display: inline-block;
    margin-right: 0.5rem;
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
    width: 81%;
    margin: 0 auto;
    &::before {
      content: "";
      height: 1px;
      width: 2em;
    }
    &::after {
      content: "";
      height: 1px;
    }
  }
`;
export const H4 = styled.h4`
  font-family: "Roboto", sans-serif;
  font-size: 1.1rem;
  margin-top: 0.5rem;
`;
export const P = styled.p`
  font-family: "Roboto", sans-serif;
  color: #8e8a8a;
  max-width: 270px;
  width: 100%;
  margin-top: 0.5rem;
  font-size: 1rem;
`;
export const Span = styled.span`
  color: #ffb22f;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 1.7rem;
  margin-top: 0.5rem;
`;
export const Button = styled.button`
  width: 7rem;
  height: 2rem;
  margin-top: 1.1rem;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
`;

export const Item = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
`;
