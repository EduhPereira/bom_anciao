import styled from "styled-components";

export const Container = styled.div`
  margin-left: 15px;
  form {
    display: flex;
    flex-direction: column;
    input {
      width: 100%;
    }
    .cancel {
      background-color: #d4f8ec;
      color: #227475;
    }
  }
  label {
    margin-right: 10px;
  }
  .btns {
    margin: 10px;
    display: flex;
    justify-content: space-around;
  }
`;
