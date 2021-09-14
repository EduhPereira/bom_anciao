import styled from "styled-components";

export const Container = styled.div`
  margin: 5px;

  input {
    background: #ffffff;
    border-radius: 10px;
    width: 30%;
    height: 35px;
    margin-left: 15px;
    border: 1px solid;
    padding: 10px;
  }
  div {
    display: flex;
    margin-top: 10px;
    justify-content: space-around;
    .cancel {
      background-color: #d4f8ec;
      color: #227475;
    }
  }
`;
