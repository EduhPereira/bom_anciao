import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background: #f5f8fa;
  color: black;
  box-sizing: border-box;

  color: black;

  svg.Open {
    width: 30px;
    height: 30px;
  }

  @media (min-width: 768px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;

    .Open {
      display: none;
    }
  }
`;

export const Contents = styled.div`
  width: 95vw;
  background: white;
  margin: auto;
  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  ::-webkit-scrollbar {
    width: 0px;
  }

  h2 {
    text-align: center;
    font-size: 1rem;
    width: 100%;
    background: #59a5a5;
    color: white;
    padding: 10px;
    border-radius: 20px 20px 0px 0px;
  }

  section {
    width: 90%;
    margin: auto;
    background: #f5f8fa;
    border-radius: 15px;
    margin-top: 50px;
    margin-bottom: 50px;

    div {
      margin: 5px;
      padding: 5px;
    }
    p {
      margin: 15px 10px 10px 10px;
    }
  }
  button {
    border-radius: 15px;
    background-color: #227475;

    color: white;
    border: none;
    width: 90px;
    height: 25px;
    font-size: 0.7rem;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 768px) {
    height: 680px;
    margin: auto 0 auto 0;

    section {
      width: 480px;
    }
    button {
      font-size: 1.2rem;
      width: 130px;
      height: 35px;
    }
  }
`;

export const ContainerUpdate = styled.div`
  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.53);
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: background 0.3s;

  input {
    background: #f5f8fa;
    border-radius: 20px;
    width: 100%;
    height: 35px;
    margin-bottom: 15px;
    border: none;
    padding: 10px;
  }

  @keyframes background {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const FormUpdate = styled.form`
  width: 80%;
  height: 70%;
  background-color: #59a5a5;

  color: white;
  font-weight: bold;
  font-size: 0.9rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 20px;

  animation: Forms 0.3s;
  div {
    width: 70%;
    margin: 10px;
  }
  .btns {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    button {
      font-weight: bold;
    }
  }
  .cancel {
    background-color: #d4f8ec;
    color: #227475;
  }
  @media (min-width: 768px) {
    width: 40%;
    font-size: 1.2rem;
    div {
      margin-top: 15px;
    }
    .btns {
      justify-content: space-around;
    }
  }

  @keyframes Forms {
    from {
      opacity: 0;
      transform: translateX(400%);
    }
  }
`;
