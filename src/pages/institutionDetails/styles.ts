import styled from "styled-components";

export const Container = styled.div`
    color: black;
    width: 100vw;
    height: 100vh;
    background: #F5F8FA;
    box-sizing: border-box;
    

    .Open{
        width: 30px;
        height: 30px;
    }

    .Name h1{
        color: black;
        text-align: center;
    }

    .Events-details{
        background: white;
        padding: 15px;
        border-radius: 10px;
        width: 250px;
        margin-bottom: 10px;
    }

    button{
        margin-top: 10px;
        background: #227475;
        border: none;
        padding: 5px 30px;
        border-radius: 20px;
        color: white;
        font-weight: bold;
        width: 100%;
    }
    h1{
        text-align: center;
        color: white;
        margin: 15px 0;
    }

    h4{
        font-family: 'Red Hat Display',sans-serif;
    }

    p{
        padding: 5px 0;
    }

    .Donations-details{
        color: black;
        background: white;
        padding: 15px;
        border-radius: 10px;
        width: 250px;
        margin-bottom: 10px;
        
    }

    .Contact-details{
        color: black;
        background: white;
        padding: 15px;
        border-radius: 10px;
        width: 250px;
        margin-bottom: 10px;
    }

    .ProgressBar{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .ProgressBar span{
        margin-left: 10px;
    }

    .Donations-title{
        text-align: center;
        margin-bottom: 10px;
    }

    @media(min-width: 768px){
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;


        .Open{
            display: none;
        }
        .Events-details{
            width: 200px;
        }
        
    }



`

export const Contents = styled.div`

    width: 90vw;
    background: white;
    margin: auto;
    overflow: scroll;
    border-radius: 20px;
    padding: 10px;

    ::-webkit-scrollbar {
            width: 0px;
    }



    > section{
        background: #59A5A5;
        border-radius: 10px;
        padding: 10px;
        width: 270px;
        margin: auto;
    }

    @media(min-width: 768px){
        height: 700px;
        border-radius: 0;

        > section {
            display: flex;
            width: 500px;
            justify-content: space-around;
        }
        height: 680px;
        margin: auto;
        .Events-details{
            width: 200px;
        }

        .Donations-details{
            width: 200px;
        }
        .Contact-details{
            width: 200px;
        }
    }

    @media(min-width: 1024px){
        > section {
            width: 700px;
        }

        .Events-details{
            width: 270px;
        }
    }


`