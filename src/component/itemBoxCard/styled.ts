import styled from "styled-components";
export const Content = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    margin-bottom: 1.3rem;
  }
  @media (max-width: 500px) {
    margin-bottom: 1.3rem;
  }
`;

export const Img = styled.img`
  max-width: 293px;
  width: 100%;
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
  height: 17%;
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
