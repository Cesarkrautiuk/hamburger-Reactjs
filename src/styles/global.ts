import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
:root{
    --background:#000000;
    --yellow:#FFB22F;
    --gray:#AA9D9D;
    --white:#FFFFFF;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background: #000000;
}
html{
    @media(max-width:1080px){
        font-size:93.75%;
    }
    @media(max-width:720px){
        font-size:87.5%;
    }
}
.react-modal-overlay {
  
  background: rgba(0,0,0,0.7);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;

}
.react-modal-content{
  width: 30%;
  background: #FFB22F;
  padding: 3rem;
  position: relative; 
  @media (max-width: 768px) {
    width: 45%; 
  }
  @media (max-width: 500px) {
    width: 100%; 
  }
}
`;
