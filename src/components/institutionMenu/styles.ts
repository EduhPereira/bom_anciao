import styled from "styled-components";

interface iContainerProps {
  visible: boolean;
}

export const Container = styled.div<iContainerProps>`
  background: rgba(1, 1, 1, 0.7);
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: flex-end;
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
    background: none;
    position: initial;
    width: 250px;
    opacity: 1;

    .selected {
      color: white;
      background: rgba(245, 248, 250, 0.5);
    }
  }
`;

export const Contents = styled.div<iContainerProps>`
  background: #227475;
  width: 229px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 30px;
  position: relative;
  animation: ${(props) => (props.visible ? "menu 0.4s" : "none")};
  opacity: ${(props) => `${props.visible ? "1" : "0"}`};
  transition: 0.3s;

  a {
    color: #acf1e0;
    font-weight: bold;
    margin-bottom: 15px;
  }

  @keyframes menu {
    from {
      opacity: 0;
      transform: translateX(400%);
    }
  }

  .User div {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    transform: translateX(-35%);
    margin-top: 40px;
    background: #227475;
    padding: 20px;
    border-radius: 100px;
  }

  .User div h1 {
    background: white;
    color: #227475;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    text-align: center;
    line-height: 55px;
    font-size: 2rem;
  }

  .User div h2 {
    font-size: 1.2rem;
    padding-left: 10px;
    color: white;
  }

  .Close {
    position: absolute;
    right: 10px;
    color: white;
    width: 30px;
    height: 30px;
    transform: translate(-10%, 70%);
  }

  @media (min-width: 768px) {
    width: 250px;
    height: 90vh;
    margin: auto 0 auto 20px;
    align-items: flex-start;
    justify-content: flex-start;
    opacity: 1;

    .Close {
      display: none;
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
    .avatar {
      display: flex;
      width: 100%;
      height: 30%;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 2px solid black;
      background-color: #fff;
    }
  }
`;

export const Logout = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100px;
  background: #f5f8fa;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(50%, 100%);
  right: 50%;
  bottom: 65%;
  padding: 10px;
  color: #227475;
  font-weight: bold;
  border-radius: 30px;

  svg {
    padding-right: 10px;
    width: 30px;
    height: 30px;
  }

  @media (min-width: 768px) {
    bottom: 30%;
  }
`;
