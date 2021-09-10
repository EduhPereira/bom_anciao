import DonationsList from "../../components/donationsList";
import NewDonationForm from "../../components/newDonationForm";
const Solicitations = () => {
  return (
    <>
      <div>
        <h2>Nome da Instituição</h2>
        <NewDonationForm />
        <DonationsList />
      </div>
    </>
  );
};
export default Solicitations;
