import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background: #f5f8fa;
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
    margin: 0 50% 40% 35%;

    border-radius: 15px;
    background-color: #227475;

    color: white;
    border: none;
    width: 130px;
    height: 35px;
    font-size: 1.3rem;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  @media (min-width: 768px) {
    width: 600px;
    height: 780px;
    margin: auto 0 auto 0;

    button {
      margin: 0 50% 0% 35%;

      font-size: 1.4rem;
    }
  }
`;
