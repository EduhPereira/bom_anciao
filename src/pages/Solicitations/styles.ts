import styled from "styled-components";

export const Container = styled.div`
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

export const SubContainer = styled.div`
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
    padding: 10px;
    border-radius: 20px 20px 0px 0px;
    align-self: flex-start;
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
  .card-top {
    width: 100%;
    background-color: #59a5a5;
    color: white;
    font-weight: bold;
    padding: 10px;

    border-radius: 20px 20px 0 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      font-size: 0.8rem;
      width: 90px;
      height: 30px;
      border-radius: 10px;
      background-color: #ffffff;
      color: #59a5a5;
      font-weight: bold;
    }
  }
  @media (min-width: 768px) {
    height: 680px;
    margin: auto 0 auto 0;

    section {
      width: 480px;
    }
    button {
      font-size: 1rem;
    }
  }
`;
export const Contents = styled.div`
  width: 90%;
  margin: auto 0 auto 0;
  background-color: #f5f8fa;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 480px;
    height: 480px;
    border-radius: 0 0 20px 20px;
    section {
      width: 480px;
    }
    .card-top {
      button {
        width: 100px;
        font-size: 0.9rem;
      }
    }
  }
`;
export const DonationsListStyled = styled.div`
  ul {
    width: fit-content;
  }
`;
