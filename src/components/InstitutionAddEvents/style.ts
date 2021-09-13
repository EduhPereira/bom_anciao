import styled from "styled-components";

export const Container = styled.div`
  color: black;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  width: 350px;
  height: 600px;
  background-color: #fff;
  box-shadow: 0px 7px 10px -4px rgba(0, 0, 0, 0.75);

  color: black;

  border-radius: 10px;
  margin: 5px;

  h2 {
    text-align: center;
    color: #fff;
    padding: 10px;
  }
`;
export const EventTitle = styled.div`
  width: 100%;
  height: 50px;

  background-color: #59a5a5;
  border-radius: 10px 10px 0 0;
`;
export const Forms = styled.form`
  display: flex;
  flex-direction: column;

  width: 70%;
`;
export const Input = styled.input`
  background: #f5f8fa;
  border-radius: 10px;
  width: 100%;
  height: 44px;
  margin-bottom: 5px;
  border: none;
  padding: 10px;
`;

export const TextArea = styled.textarea`
  background: #f5f8fa;
  border-radius: 10px;
  width: 100%;
  height: 74px;
  margin-bottom: 5px;
  border: none;
  padding: 10px;
`;
export const Button = styled.button`
  background: #70cccc;
  border-radius: 15px;
  width: 100%;
  height: 44px;
  border: none;

  color: white;

  font-weight: bolder;
  font-size: 1.3rem;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
