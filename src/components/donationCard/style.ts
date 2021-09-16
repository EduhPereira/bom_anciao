import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  .delete {
    width: 70px;
    background-color: #ff6666;
    border-radius: 5px;
  }
  .update {
    width: 70px;
    background-color: #ffc405;
    border-radius: 5px;
  }
  @media (min-width: 768px) {
    width: 430px;
  }
`;

export const Content = styled.div`
  width: 250px;
  margin: 5px 0 0 5px;

  hr {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 430px;
  }
`;
export const ReciveContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 10px;

  div {
    width: 60%;
    display: flex;
    justify-content: space-around;
    @media (min-width: 768px) {
      width: 40%;
    }
  }
`;
