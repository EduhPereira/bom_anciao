import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  color: black;

  svg.Open {
    width: 30px;
    height: 30px;
  }
  .search-container {
    background-color: #59a5a5;
    height: 100vh;
    border-radius: 10px;
    padding-top: 5vh;
    max-width: 87%;
    margin-left: 5vw;
  }
  .search-input {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 6vh;
    margin-right: 5vw;

    input {
      background: #f5f8fa;
      border-radius: 10px;
      width: 60%;
      height: 7vh;
      border: none;
      padding: 10px;
    }
    button {
      background: #f5f8fa;
      border-radius: 15px;
      width: 25%;
      height: 7vh;
      border: none;
      color: #70cccc;
      font-weight: bolder;
      font-size: 0.8rem;
      margin-left: 4vw;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  .list-container {
    overflow-y: scroll;
    display: flex;
    justify-content: center;
    color: #f5f8fa;
    font-weight: 500;
    .list-item-container {
      height: 100%;
      ul {
        padding-left: 5vw;
        border-left: 4px solid #f5f8fa;
      }
      li {
        list-style-type: none;
        margin-bottom: 3vh;
        border-bottom: 2px solid #f5f8fa;
      }
    }
  }

  svg {
    width: 30px;
    height: 30px;
  }

  @media (min-width: 768px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: flex-start;

    .Open {
      display: none;
    }
    .search-container {
      max-height: 80vh;
      margin-top: 10vh;
    }
    .search-input {
      height: 10vh;
      margin-left: 3vw;
    }

    button {
      width: 100px;
    }
    .list-container {
      height: 60vh;
    }
  }
`;
