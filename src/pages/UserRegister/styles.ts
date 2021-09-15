import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: linear-gradient(
    117.06deg,
    #59a5a5 26.74%,
    #3f8e8e 72.27%,
    #227475 98.23%
  );
  color: #70cccc;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 728px) {
    justify-content: space-between;
  }
`;

export const Content = styled.div`
  width: 300px;
  height: 650px;

  background-color: white;
  border-radius: 15px;

  display: flex;
  flex-direction: column;

  justify-content: space-around;
  align-items: center;

  box-shadow: 7px 7px 5px 0px rgba(49, 48, 48, 0.75);
  -webkit-box-shadow: 7px 7px 5px 0px rgba(49, 48, 48, 0.75);
  -moz-box-shadow: 7px 7px 5px 0px rgba(49, 48, 48, 0.75);

  a {
    text-decoration: none;
    color: #8fa7b2;
    font-weight: bold;
  }

  a:hover {
    color: #227475;
  }

  div {
    align-self: center;
  }
  @media (min-width: 728px) {
    align-self: center;
    width: 40%;
    height: 500px;
  }
`;

export const Form = styled.form`
  width: 70%;
  height: 70%;

  color: black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  span {
    color: red;
  }
  label {
    font-size: 0.7rem;
  }
`;
export const Input = styled.input`
  background: #f5f8fa;
  border-radius: 10px;
  width: 100%;
  height: 10px;
  margin-bottom: 15px;
  border: none;
  padding: 10px;
`;

export const Button = styled.button`
  background: #70cccc;
  border-radius: 10px;
  width: 100%;
  padding: 4px 6px;
  margin-bottom: 15px;
  border: none;

  color: white;

  font-weight: bolder;
  font-size: 1.15rem;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Appear = keyframes`
  from{
    opacity:0;
  }
  to{
    opacity:1;
  }
`;

export const Aside = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  width: 35%;
  animation: ${Appear} 1s linear;
  img {
    width: 100%;
    height: 60%;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;
