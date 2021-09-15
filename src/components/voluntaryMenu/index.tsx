import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Contents, Logout } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import api from "../../services/api";
import { useLogin } from "../../Providers/Login-Voluntaries";
import { FiLogOut } from 'react-icons/fi'

interface iVoluntaryProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

interface iUser{
  name: string
}


const VoluntaryMenu = ({ visible, setVisible }: iVoluntaryProps) => {
  useEffect(()=>{
    reqUser()
  }, [])

  const {userId: id} = useLogin()

  const showMenu = () => {
    setVisible(false);
  };

const reqUser = async() => {
  const response = await api.get(`users?type=Voluntary&&id=${id}`)
  setUser(response.data)
}

const handleLogout = () => {
  localStorage.clear()
  window.location.reload()
}

const[user, setUser] = useState<iUser[]>([] as iUser[])
const {userName} = useLogin()
console.log(userName)

  return (
    <>
      <Container visible={visible}>
        <Contents visible={visible}>
          <section className="User">
            <div>
                <h1>{userName.substring(0, 1)}</h1>
                <h2>{userName}</h2>
            </div>

          </section>
          <AiOutlineClose className="Close" onClick={showMenu} />
          <NavLink activeClassName="selected" exact to="/profile">
            Meus dados
          </NavLink>
          <NavLink activeClassName="selected" exact to="/my-events">
            Eventos
          </NavLink>
          <NavLink activeClassName="selected" exact to="/search-institutions">
            Buscar Instituições
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

export default VoluntaryMenu;
