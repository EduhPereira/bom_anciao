import styled from "styled-components";

export const RegisterStyled = styled.form`
  width: 100vw;
  height: 100vh;
  font-family: "Red Hat Display", sans-serif;
  background: linear-gradient(
    90deg,
    rgba(233, 218, 195, 1) 0%,
    rgba(209, 191, 163, 1) 35%,
    rgba(193, 164, 135, 1) 100%
  );

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    margin-top: 15px;
  }

  a {
    text-decoration: none;
    color: #8fa7b2;
  }

  a:hover {
    color: #c1a487;
  }

  .error {
    color: red;
    margin-top: 0;
  }
`;

export const Content = styled.div`
  width: 45%;
  height: 95%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  color: #8fa7b2;

  border-radius: 10px;

  label {
    font-size: 16px;
    width: 89%;
    margin: 0;
    display: flex;
    justify-content: flex-start;
  }

  h2 {
    color: #c1a487;
    width: 89%;
    height: 10%;
  }
`;

export const Input = styled.input`
  width: 40vw;
  height: 4vh;

  margin-bottom: 15px;

  color: black;
  background-color: #e8e7e7;

  padding: 10px;
  border: none;
  border-radius: 2px;
  outline: none;
`;

export const Button = styled.button`
  font-family: "Red Hat Display", sans-serif;
  font-size: 20px;
  font-weight: bold;

  width: 20vw;

  background-color: #c1a487;
  color: #ffffff;

  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
`;
