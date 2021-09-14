import styled from "styled-components";

interface iContainerProps {
    visible: boolean
}

export const Container = styled.div<iContainerProps>`

    background: rgba(1, 1, 1, 0.7);
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    justify-content: flex-end;
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
    animation: ${props => props.visible ? 'background 0.3s' : 'none'};
    opacity: ${(props) => `${props.visible ? "1" : "0"}`};
    transition: 0.3s;

    @keyframes background{
        from {
            opacity: 0;
        }
    }
    

    .selected{
        color: white;
    }

    @media(min-width: 768px){
        visibility: visible;
        background: none;
        position: initial;
        width: 250px;
        opacity: 1;
        

        .selected{
            color: white;
            background: rgba(245,248,250, 0.5);
        }
        
    }

`

export const Contents = styled.div<iContainerProps>`
    background: #227475;
    width: 229px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 30px;
    justify-content: flex-start;
    animation: ${props => props.visible ? 'menu 0.4s' : 'none'};
    opacity: ${(props) => `${props.visible ? "1" : "0"}`};
    transition: 0.3s;

    @keyframes menu{
        from {
            opacity: 0;
            transform: translateX(400%);
        }
    }

    @media(min-width: 768px){
        width: 250px;
        height: 90vh;
        margin: auto 0 auto 20px;
        align-items: flex-start;
        justify-content: flex-start;
        opacity: 1;

        

        .Close{
            display: none;
        }

        a{
            padding: 20px 0 10px 30px;
            width: 100%;
            position: relative;
            color: #ACF1E0;
            font-weight: bold;
        }
        a::before{
            position: absolute;
            content: '';
            width: 170px;
            height: 1px;
            background: white;
            bottom: 0;
            transform: translateX(50%);
            right: 50%;
        }
    }

`