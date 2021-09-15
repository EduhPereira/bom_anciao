import styled from "styled-components";

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
`;

export const Content = styled.div`
  width: 45%;
  height: 70%;

  background-color: white;
  border-radius: 15px;

  display: flex;
  flex-direction: column;

  justify-content: space-around;
  align-items: center;

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
  @media (max-width: 800px) {
    align-self: center;
    width: 80%;
    height: 80%;
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
  border-radius: 10px;
  width: 100%;
  height: 44px;
  margin-bottom: 15px;
  border: none;

  color: white;

  font-weight: bolder;
  font-size: 1.3rem;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
