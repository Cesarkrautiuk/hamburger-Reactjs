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
`;
