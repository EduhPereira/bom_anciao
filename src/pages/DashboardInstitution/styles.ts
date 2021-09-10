import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  background-color: #fff;

  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const CardEvents = styled.div`
  width: 300px;
  height: 100%;
  background-color: #fff;
  box-shadow: 0px 7px 10px -4px rgba(0, 0, 0, 0.75);

  color: black;

  display: flex;
  flex-direction: column;

  border-radius: 10px;
  margin: 5px;
`;

export const Event = styled.div`
  border-bottom: 1px solid #59a5a5;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  padding: 10px;

  .card-event {
    display: flex;
  }

  .button {
  }
`;

export const TitleEvent = styled.div`
  background-color: #59a5a5;
  color: #fff;
  padding: 10px;

  h2 {
    text-align: center;
  }

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Button = styled.button`
  background-color: #ffd666;
  color: #fff;
  font-size: 10px;

  padding: 5px;
  border: none;
  border-radius: 5px;
`;
