import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.53);
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: background 0.3s;
  @keyframes background {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  form {
    width: 300px;
    height: 400px;
    background-color: #59a5a5;
    color: white;

    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .updateForm {
      width: 300px;
      margin: 0 10% -5% 10%;
    }
    input {
      background: #f5f8fa;
      border-radius: 20px;
      width: 80%;
      height: 35px;
      margin-bottom: 15px;
      border: none;
      padding: 10px;
    }
    .cancel {
      background-color: #d4f8ec;
      color: #227475;
    }

    animation: Forms 0.3s;
    @keyframes Forms {
      from {
        opacity: 0;
        transform: translateX(400%);
      }
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
