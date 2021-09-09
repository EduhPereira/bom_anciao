import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  background-color: black;
  color: white;
  span {
    font-weight: 700;
    text-transform: capitalize;
    font-size: 1.5rem;
  }
  div {
    button:not(:first-child) {
      margin-left: 12px;
    }

    button {
      padding: 5px 10px;
      text-transform: capitalize;
      font-weight: 700;
      border: none;
      border-radius: 5px;
    }
  }
`;

export const Functionalities = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  .func__col-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
  .func__col-2 {
    display: flex;
    gap: 1.2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;

    button {
      padding: 5px 10px;
      text-transform: capitalize;
      font-weight: 700;
      border: none;
      border-radius: 5px;
    }
  }
`;

export const Voluntaries = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  div {
    margin: 24px 0 0 0;
    display: flex;
    gap: 1rem;
  }
`;

export const InformationCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 250px;
  background-color: goldenrod;
  border-radius: 5px;
`;

export const Institutions = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  div {
    margin: 24px 0 0 0;
    display: flex;
    gap: 1rem;
  }
`;

export const InstitutionsCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background-color: goldenrod;
  border-radius: 100%;
`;

export const Footer = styled.footer`
  display: flex;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
`;
