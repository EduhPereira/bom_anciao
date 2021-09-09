import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        outline: none;
    }

    :root{
        //inserir aqui as cores a serem utilizadas no projeto
    }

    button{
        cursor: pointer;
        font-family: inherit;
    }

    a{
        text-decoration: none;
    }
`;
