import { useState } from "react";
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
    <>
      <li>
        <span>Item: {donation.name}</span> <br />
        <span>Quantidade: {donation.quantity}</span> <br />
        <span>Recebido: {donation.received}</span>
        <button onClick={() => deleteDonation(donation.id)}>Remover</button>
        <button onClick={() => setShowUpdateModal(true)}>Atualizar</button>
      </li>

      {showUpdateModal && (
        <DonationUpdateModal
          donation={donation}
          showModal={setShowUpdateModal}
        />
      )}
    </>
  );
};

export default DonationCard;
