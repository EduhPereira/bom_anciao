import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Container, Contents, Logout } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { useAuthInstitution } from "../../Providers/Institution-Provider";
import api from "../../services/api";

interface iInstitutionProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

interface InstitutionName {
  name: string;
}

const InstitutionMenu = ({ visible, setVisible }: iInstitutionProps) => {
  const [nameIns, setNameIns] = useState<InstitutionName[]>(
    [] as InstitutionName[]
  );
  const { signOut, token } = useAuthInstitution();
  const institutionID =
    localStorage.getItem("@Bom ancião: institutionID") || "";

  const history = useHistory()

  const showMenu = () => {
    setVisible(false);
  };

  async function reqInst() {
    const response = await api.get(`/users?id=${institutionID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setNameIns(response.data);
  }

  useEffect(() => {
    reqInst();
  }, [institutionID]);

  const logout = async () => {
    await localStorage.clear()
    await history.push("/")
    window.location.reload()
  }

  return (
    <>
      <Container visible={visible}>
        <Contents visible={visible}>
          <section className="Institution">
            {nameIns.map((nome) => (
              <div>
                <h1>{nome.name.substring(0, 1)}</h1>
                <h2>{nome.name}</h2>
              </div>
            ))}
          </section>
          <AiOutlineClose className="Close" onClick={showMenu} />
          <NavLink activeClassName="selected" exact to="/institution-data">
            Meus dados
          </NavLink>
          <NavLink activeClassName="selected" exact to="/events-institution">
            Meus Eventos
          </NavLink>
          <NavLink activeClassName="selected" exact to="/donations">
            Doações
          </NavLink>

          <Logout onClick={logout}>
            <FiLogOut />
            <p>Sair</p>
          </Logout>
        </Contents>
      </Container>
    </>
  );
};

export default InstitutionMenu;
