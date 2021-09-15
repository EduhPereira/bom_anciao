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
`;

export const Content = styled.div`
  width: 300px;
  height: 400px;
  background-color: #59a5a5;
  color: white;

  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  font-weight: bold;
  span {
    margin-left: 15px;
  }
  input {
    background: #ffffff;
    border-radius: 10px;
    width: 30%;
    height: 25px;
    border: 1px solid;
    padding: 10px;
  }
  div {
    margin: 20px 15px 0 15px;
    display: flex;

    justify-content: space-around;
    .cancel {
      background-color: #d4f8ec;
      color: #227475;
    }
  }
  animation: Forms 0.3s;
  @keyframes Forms {
    from {
      opacity: 0;
      transform: translateX(400%);
    }
  }
`;
