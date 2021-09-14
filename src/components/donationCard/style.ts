import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  .delete {
    width: 70px;
    background-color: #ff6666;
    border-radius: 5px;
    margin: 0 10px 10px 50px;
  }
  .update {
    width: 70px;
    background-color: #ffc405;
    border-radius: 5px;
    margin: 0 10px 10px 0px;
  }
  @media (min-width: 768px) {
    width: 430px;

    .delete {
      margin: 0 10px 10px 180px;
    }
  }
`;

export const Content = styled.div`
  margin: 5px 0 0 5px;
  width: 100%;
  hr {
    width: 100%;
  }
`;
