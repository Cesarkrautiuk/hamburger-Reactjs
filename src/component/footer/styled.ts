import styled from "styled-components";
export const Content = styled.div`
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
