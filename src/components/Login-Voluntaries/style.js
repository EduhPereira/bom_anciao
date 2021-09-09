import styled from "styled-components";
import loginImg from "../../Assets/img/loginImg.png";

export const Content = styled.div`
  width: 350px;
  height: 400px;

  background-color: white;
  border-radius: 15px;

  display: flex;
  justify-content: center;
  @media (max-width: 800px) {
    align-self: center;
    width: 80%;
    height: 50%;
  }
`;

export const Form = styled.form`
  width: 70%;
  height: 100%;

  color: black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  span {
    color: red;
  }
`;
export const Input = styled.input`
  background: #f5f8fa;
  border-radius: 10px;
  width: 100%;
  height: 44px;
  margin-bottom: 15px;
  border: none;
  padding: 10px;
`;

export const Button = styled.button`
  background: #70cccc;
  border-radius: 15px;
  width: 100%;
  height: 44px;
  border: none;

  color: white;

  font-weight: bolder;
  font-size: 1.3rem;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SideImg = styled.div`
  background-image: url(${loginImg});
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center;
  width: 50%;
  height: 100%;

  @media (max-width: 800px) {
    background-image: none;
    width: 0%;
    height: 0%;
  }
`;
