import { useState } from "react";
import DonationsList from "../../components/donationsList";
import NewDonationForm from "../../components/newDonationForm";

const Solicitations = () => {
  const [newDonation, setNewDonation] = useState(false);
  return (
    <>
      <div>
        <h2>Nome da Instituição</h2>
        <div>
          <span>Doações</span>
          <button onClick={() => setNewDonation(true)}>Criar doação</button>
        </div>

        {newDonation && (
          <NewDonationForm modal={newDonation} setModal={setNewDonation} />
        )}
        <DonationsList />
      </div>
    </>
  );
};
export default Solicitations;
