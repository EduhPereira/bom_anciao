import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #f5f8fa;

  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;

    .Open {
      display: none;
    }
  }

  svg.Open {
    width: 30px;
    height: 30px;
    color: black;
  }
`;

export const Content = styled.div`
  width: 80vw;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;

  h2 {
    color: #000;
  }

  h4 {
    text-align: center;
    font-size: 25px;
    padding: 15px 0px;
    color: #000;
  }

  @media (min-width: 768px) {
    width: 100vw;
    height: 72vh;
    margin: auto 0 auto 0;
  }
`;

export const CardEvents = styled.div`
  width: 350px;
  height: 450px;
  background-color: #f5f8fa;

  color: black;

  border-radius: 10px;
  margin: 5px;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }
  @media (min-width: 768px) {
    width: 500px;
    height: 450px;
  }
`;

export const Event = styled.div`
  width: 100%;
  /* height: 100%; */

  padding: 10px;

  .card-event {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #59a5a5;
    padding: 10px;
  }

  .button {
    text-align: right;
    margin-top: 5px;
  }
`;

export const TitleEvent = styled.div`
  background-color: #59a5a5;
  color: #fff;
  padding: 10px;

  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 1.1rem;
    text-align: center;
    color: #fff;
  }

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ButtonAtt = styled.button`
  background-color: #ffd666;
  color: #fff;
  font-size: 0.9rem;

  width: 70px;
  height: 25px;
  border-radius: 5px;

  margin-right: 20px;
  border: none;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
`;

export const ButtonRmv = styled.button`
  background-color: #ff6666;
  width: 70px;
  height: 25px;
  border-radius: 5px;

  color: #fff;
  font-size: 0.9rem;

  border: none;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
`;

export const ButtonCreateEvent = styled.button`
  font-size: 0.85rem;
  width: 90px;
  height: 30px;
  border-radius: 10px;
  background-color: #ffffff;
  color: #59a5a5;
  font-weight: bold;
  padding: 5px;
  border: none;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  padding: 5px;
`;
