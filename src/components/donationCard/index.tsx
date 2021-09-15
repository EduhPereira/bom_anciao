import { useState } from "react";
import { Container, Content, ReciveContent } from "./style";
import { useAuthInstitution } from "../../Providers/Institution-Provider";
import api from "../../services/api";
import DonationUpdateModal from "../donationUpdateModal";

interface IDonation {
  name: string;
  quantity: string;
  received: number;
  id: number;
}

interface IDonationCardProps {
  key: number;
  donation: IDonation;
}

const DonationCard = ({ key, donation }: IDonationCardProps) => {
  const { token, institutionId } = useAuthInstitution();

  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);
  async function deleteDonation(id: number) {
    const response = await api.delete(`/donations/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
  }

  return (
    <Container>
      <Content>
        <span>Item: {donation.name}</span> <br />
        <span>Quantidade: {donation.quantity}</span> <br />
        <ReciveContent>
          <span>Recebido: {donation.received}</span>
          <div>
            <button
              className="delete"
              onClick={() => deleteDonation(donation.id)}
            >
              Remover
            </button>
            <button className="update" onClick={() => setShowUpdateModal(true)}>
              Atualizar
            </button>
          </div>
        </ReciveContent>
        <hr />
      </Content>

      {showUpdateModal && (
        <DonationUpdateModal
          donation={donation}
          showModal={setShowUpdateModal}
        />
      )}
    </Container>
  );
};

export default DonationCard;
