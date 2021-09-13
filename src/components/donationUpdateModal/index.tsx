import { useState } from "react";
import { useAuthInstitution } from "../../Providers/Institution-Provider";
import api from "../../services/api";

interface IDonation {
  name: string;
  quantity: string;
  received: number;
  id: number;
}

interface IDonationUpdateModalProps {
  donation: IDonation;
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const DonationUpdateModal = ({
  donation,
  showModal,
}: IDonationUpdateModalProps) => {
  const { token } = useAuthInstitution();
  const [userInput, setUserInput] = useState<string>("");

  async function updateReceived(id: number) {
    const response = await api.patch(
      `/donations/${id}`,
      { received: userInput },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    showModal(false);
  }

  return (
    <>
      <div className="donation-update-modal">
        <span>Item: {donation.name} </span> <br />
        <span>Quantidade: {donation.quantity}</span> <br />
        <span>Quantidade recebida: {donation.received}</span> <br />
        <label>Insira o quanto recebeu:</label> <br />
        <input
          type="number"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={() => showModal(false)}>Cancelar</button>
        <button onClick={() => updateReceived(donation.id)}>Atualizar</button>
      </div>
    </>
  );
};

export default DonationUpdateModal;
