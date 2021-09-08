import styled from "styled-components";

export const RegisterStyled = styled.form`
  width: 100vw;
  height: 100vh;
  /* padding: 10px; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label {
    font-size: 16px;
    width: 40%;
    margin: 0;
  }
  span {
    margin-top: 15px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: #c4c4c4;
  }

  .error {
    color: red;
  }
`;

export const Input = styled.input`
  width: 40vw;
  height: 4vh;

  margin-bottom: 15px;

  background-color: #c4c4c4;
  color: white;

  border: none;
  border-radius: 2px;
  outline: none;
`;

export const Button = styled.button`
  background-color: #c4c4c4;
  border: none;
  outline: none;

  width: 10vw;
  height: 4vh;

  font-size: 14px;

  cursor: pointer;
`;
