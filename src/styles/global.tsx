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
    body {
        color: white;
        height: 100vh;
        font-family: 'Red Hat Display', sans-serif;
          background-image: linear-gradient(117.06deg, #59A5A5 26.74%, #3F8E8E 72.27%, #227475 98.23%);
          background-repeat: no-repeat;
    }

    input, button {
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-family: 'Red Hat Display', sans-serif;
    }
    
    h3, h4{
        font-family: 'Prociono', serif;
    }
    
    button {
        cursor: pointer;
        font-family: 'Red Hat Display', sans-serif;
    }

    a {
        text-decoration: none;
    }

`;
