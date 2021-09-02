import styled from "styled-components";
export const Content = styled.div`
  height: 130vh;
  width: 100%;
  color: #fff;
  display: flex;
  scroll-behavior: smooth;
  color: #fff;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Shopping = styled.div`
  width: 80%;
  margin-left: 2rem;
  @media (max-width: 500px) {
    width: 100%;
  }
  margin: 0;
`;
export const H2Shopping = styled.h2`
  font-family: "Roboto", sans-serif;
  color: #fff;
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 2rem;
`;
export const H3Shopping = styled.h3`
  font-family: "Roboto", sans-serif;
  color: #ffb22f;
  font-size: 1.1rem;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;
export const ListShopping = styled.table`
  color: #fff;
  width: 68%;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  margin-left: 2rem;
  border-collapse: collapse;
  th {
    font-weight: 300;
    color: #9d9d9d;
  }
  tr td {
    border-top: 1px solid #ffb22f;
    padding: 1rem;
    width: 20%;
    text-align: center;
  }
  p {
    font-weight: 300;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin: 0;
    font-size: 0.9rem;
    tr td {
      border-top: 1px solid #ffb22f;
      padding: 1rem;
      width: 100%;
      text-align: center;
    }
    span {
      font-size: 1rem;
    }
  }
`;
export const SummaryPurchase = styled.div`
  width: 22%;
  margin-right: 3rem;
`;
export const Buttom = styled.button`
  width: 14.3rem;
  height: 2.8rem;
  margin-top: 1rem;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  margin-left: 1.5rem;
`;
export const H2SummaryPurchase = styled.div`
  color: #fff;
  font-family: "Roboto", sans-serif;
  margin-top: 1.5rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 0.4rem;
`;
export const Img = styled.img`
  width: 100%;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const BoxSummaryPurchase = styled.div`
  width: 100%;
  height: 30%;
  background: #151413;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  span {
    display: flex;
    justify-content: space-between;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-top: 1rem;
    font-family: "Roboto", sans-serif;
    color: #bfbaba;
    p + p {
      color: #fff;
      font-weight: 500;
    }
  }
`;
