import styled from "styled-components";

interface VisibleModal {
  visible: boolean;
}

export const Container = styled.div<VisibleModal>`
  background: rgba(1, 1, 1, 0.7);
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  animation: ${(props) => (props.visible ? "background 0.3s" : "none")};
  opacity: ${(props) => `${props.visible ? "1" : "0"}`};
  transition: 0.3s;

  @keyframes background {
    from {
      opacity: 0;
    }
  }

  .selected {
    color: white;
  }

  @media (min-width: 768px) {
    visibility: visible;

    position: fixed;
    width: 100vw;
    height: 100vh;

    opacity: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(1, 1, 1, 0.7);
    visibility: ${(props) => (props.visible ? "visible" : "hidden")};
    animation: ${(props) => (props.visible ? "background 0.3s" : "none")};
    opacity: ${(props) => `${props.visible ? "1" : "0"}`};
    transition: 0.3s;

    .selected {
      color: white;
      background: rgba(245, 248, 250, 0.5);
    }
  }
`;

export const Content = styled.div<VisibleModal>`
  background: #227475;
  width: 65%;
  height: 93vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${(props) => (props.visible ? "menu 0.4s" : "none")};
  opacity: ${(props) => `${props.visible ? "1" : "0"}`};
  transition: 0.3s;
  border-radius: 15px;

  p {
    font-size: 12px;
  }

  @keyframes menu {
    from {
      opacity: 0;
      transform: translateX(400%);
    }
  }

  @media (min-width: 768px) {
    width: 397px;
    height: 540px;
    margin: auto 0 auto 20px;
    align-items: center;
    justify-content: center;
    opacity: 1;
    animation: ${(props) => (props.visible ? "menu 0.4s" : "none")};
    opacity: ${(props) => `${props.visible ? "1" : "0"}`};
    transition: 0.3s;
    border-radius: 10px;

    .Close {
      display: none;
    }

    a {
      padding: 20px 0 10px 30px;
      width: 100%;
      position: relative;
      color: white;
      font-weight: bold;
    }
    a::before {
      position: absolute;
      content: "";
      width: 170px;
      height: 1px;
      background: white;
      bottom: 0;
      transform: translateX(50%);
      right: 50%;
    }

    p {
      font-size: 16px;
    }

    span {
      width: 100%;
      font-size: 10px;
      text-align: right;
    }

    .btn-div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const EventTitle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;
export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  @media (min-width: 768px) {
  }
`;
export const Input = styled.input`
  background: #f5f8fa;
  border-radius: 10px;
  width: 100%;
  height: 30px;
  margin-bottom: 5px;
  border: none;
  padding: 10px;
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const TextArea = styled.textarea`
  background: #f5f8fa;
  border-radius: 10px;
  width: 100%;
  height: 74px;
  margin-bottom: 5px;
  border: none;
  padding: 10px;
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
export const ButtonSave = styled.button`
  background: #70cccc;
  border-radius: 15px;
  width: 100%;
  height: 33px;
  border: none;
  margin-top: 10px;

  color: white;

  font-weight: bolder;
  font-size: 1.1rem;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    height: 35px;
    width: 127px;
  }
`;

export const ButtonCancel = styled.button`
  background: #d4f8ec;
  color: #227475;
  border-radius: 15px;
  width: 100%;
  height: 33px;
  border: none;
  margin-top: 10px;
  font-weight: bolder;
  font-size: 1.1rem;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    height: 35px;
    width: 127px;
  }
`;
