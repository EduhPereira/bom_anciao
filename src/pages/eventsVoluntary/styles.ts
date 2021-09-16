import styled from "styled-components";

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    background: #F5F8FA;
    color: black;
    box-sizing: border-box;

    ::-webkit-scrollbar {
        width: 0px;
    }

    svg.Open{
        width: 30px;
        height: 30px;
    }

    @media(min-width: 768px){
        display: flex;

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
        font-family: 'Red Hat Display',sans-serif;
    }

    h2{
        text-align: left;
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

    ::-webkit-scrollbar {
            width: 0px;
        }

    .Event h3{
        margin-top: 20px;
        margin-bottom: 15px;
    }

    .Event{
        border-bottom: 1px solid #59A5A5;
        padding: 10px 10px;
    }

    .Cancel{
        margin: 10px 0;
        border: none;
        background: #FF6666;
        color: white;
        font-weight: bold;
        padding: 10px;
        border-radius: 20px;

    }

    @media(min-width: 768px){
        height: 680px;
        margin: auto 0 auto 0;

        section{
            width: 480px;
        }
        
    }

    @media(min-width: 1024px){
        section{
            width: 700px;
        }

        overflow: auto;

        

        .Event{
            padding: 10px 50px;
        }
    }
`