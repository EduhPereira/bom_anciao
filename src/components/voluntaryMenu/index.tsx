import { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import { Container, Contents } from './styles'
import { AiOutlineClose } from 'react-icons/ai'

interface iVoluntaryProps {
  visible: boolean,
  setVisible: Dispatch<SetStateAction<boolean>>
}



const VoluntaryMenu = ({ visible, setVisible }: iVoluntaryProps) => {

  const showMenu = () => {
    setVisible(false)
  }

  return (
    <>
      <Container visible={visible}>
        <Contents visible={visible}>
          <AiOutlineClose className="Close" onClick={showMenu}/>
          <NavLink activeClassName="selected" exact to="/profile">Meus dados</NavLink>
          <NavLink activeClassName="selected" exact to="/my-events">Eventos</NavLink>
          <NavLink activeClassName="selected" exact to="/search-institutions">Buscar Instituições</NavLink>
        </Contents>

      </Container>
    </>
  );
};

export default VoluntaryMenu;
