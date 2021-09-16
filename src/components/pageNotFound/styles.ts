import styled from "styled-components";

export const Container = styled.div`
    overflow: none;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;

`


export const Contents = styled.div`
    margin-top: 70px;
    width: 300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    a{
        background: #227475;
        color: #fff;
        cursor: pointer;
        padding: 10px 50px;
        font-family: bold;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        border-radius: 20px;
        transition: 0.2s;
    }

    a:hover{
        background: #114754;
        color: #fff;
    }

    @media(min-width: 768px){
        width: 760px;
    }

`