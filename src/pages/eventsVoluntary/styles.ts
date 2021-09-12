import styled from "styled-components";

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    background: #F5F8FA;
    color: black;

    svg.Open{
        width: 30px;
        height: 30px;
    }

    @media(min-width: 768px){
        width: 100%;
        display: flex;
        justify-content: center;

        .Open{
            display: none;
        }
        
    }

`


export const Contents = styled.div`
    width: 95vw;
    background: white;
    margin: auto;
    overflow: auto;
    

    ::-webkit-scrollbar {
        width: 0px;
    }


    h4{
        text-align: center;
        padding: 15px 0px;
    }
    h2{
        text-align: center;
        font-size: 1rem;
        width: 100%;
        background: #59A5A5;
        color: white;
        padding: 10px;
        border-radius: 20px 20px 0px 0px;
    }

    section{
        width: 90%;
        margin: auto;
        background: #F5F8FA;
        
    }

    .Event h3{
        margin-top: 20px;
        margin-bottom: 15px;
    }

    .Event{
        border-bottom: 1px solid #59A5A5;
        padding-bottom: 10px;
    }

    @media(min-width: 768px){
        width: 600px;
        height: 780px;
        margin: auto 0 auto 0;
    }
`