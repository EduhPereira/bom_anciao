import { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import { Avatar, Container, Contents } from "./styles";
import { AiOutlineClose } from "react-icons/ai";

interface iInstitutionProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const InstitutionMenu = ({ visible, setVisible }: iInstitutionProps) => {
  const showMenu = () => {
    setVisible(false);
  };

  return (
    <>
      <Container visible={visible}>
        <Contents visible={visible}>
          <AiOutlineClose className="Close" onClick={showMenu} />
          {/* <Avatar /> */}
          <NavLink activeClassName="selected" exact to="/institution-data">
            Meus dados
          </NavLink>
          <NavLink activeClassName="selected" exact to="/events-institution">
            Meus Eventos
          </NavLink>
          <NavLink activeClassName="selected" exact to="/donations">
            Doações
          </NavLink>
        </Contents>
      </Container>
    </>
  );
};

export default InstitutionMenu;