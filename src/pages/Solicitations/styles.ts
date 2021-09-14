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
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    text-align: center;
    margin-bottom: 4vh;
  }
  .card-top {
    border-radius: 20px 20px 0px 0px;

    background: #59a5a5;
    padding: 8px;
    width: 80%;
    color: white;
    button {
      color: #59a5a5;
    }
  }
`;

export const DonationsListStyled = styled.div`
  ul {
      width: fit-content;
  }
  }
`;
