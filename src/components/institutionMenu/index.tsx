import { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import { Container, Contents, Logout } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import myImage from "../../Assets/img/institution-icon.jpg";
import { FiLogOut } from "react-icons/fi";
import { useAuthInstitution } from "../../Providers/Institution-Provider";

interface iInstitutionProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const InstitutionMenu = ({ visible, setVisible }: iInstitutionProps) => {
  const showMenu = () => {
    setVisible(false);
  };

  const { signOut } = useAuthInstitution();

  const handleLogout = async () => {
    await localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <Container visible={visible}>
        <Contents visible={visible}>
          <AiOutlineClose className="Close" onClick={showMenu} />
          {/* <div className="avatar">
            <img src={myImage} alt="not found" />
          </div> */}
          <NavLink activeClassName="selected" exact to="/institution-data">
            Meus dados
          </NavLink>
          <NavLink activeClassName="selected" exact to="/events-institution">
            Meus Eventos
          </NavLink>
          <NavLink activeClassName="selected" exact to="/donations">
            Doações
          </NavLink>

          <Logout onClick={handleLogout}>
            <FiLogOut />
            <p>Sair</p>
          </Logout>
        </Contents>
      </Container>
    </>
  );
};

export default InstitutionMenu;
