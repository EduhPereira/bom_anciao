import { useState, useEffect } from "react";
import DonationsList from "../../components/donationsList";
import NewDonationForm from "../../components/newDonationForm";
import api from "../../services/api";
import { useAuthInstitution } from "../../Providers/Institution-Provider";
import {
  Container,
  DonationsListStyled,
  SubContainer,
  Contents,
} from "./styles";
import InstitutionMenu from "../../components/institutionMenu";
import { BiMenuAltLeft } from "react-icons/bi";
interface IUser {
  email: string;
  password: string;
  name: string;
  address: string;
  type: string;
  id: number;
}

const Solicitations = () => {
  const [newDonation, setNewDonation] = useState<boolean>(false);
  const [nameInstitution, setNameInstitution] = useState<string>("");
  const [visible, setVisible] = useState(false);

  const { institutionId } = useAuthInstitution();

  const showMenu = () => {
    setVisible(true);
  };

  async function loadNameInstitution() {
    const response = await api.get(
      `/users?type=Institution&&id=${institutionId}`
    );
    const data = response.data.map((inst: IUser) => {
      return inst.name;
    });
    setNameInstitution(data[0]);
  }

  useEffect(() => {
    loadNameInstitution();
  }, []);

  return (
    <>
      <Container>
        <InstitutionMenu visible={visible} setVisible={setVisible} />
        <BiMenuAltLeft className="Open" onClick={showMenu} />
        <SubContainer>
          <h2>{nameInstitution}</h2>
          <Contents>
            <div className="card-top">
              <span>Doações</span>
              <button onClick={() => setNewDonation(true)}>Criar doação</button>
            </div>

            {newDonation && (
              <NewDonationForm modal={newDonation} setModal={setNewDonation} />
            )}
            <DonationsListStyled>
              <DonationsList />
            </DonationsListStyled>
          </Contents>
        </SubContainer>
      </Container>
    </>
  );
};
export default Solicitations;
