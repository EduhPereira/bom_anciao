import { useEffect, useState } from "react";
import { useAuthInstitution } from "../../Providers/Institution-Provider";
import api from "../../services/api";
import DonationCard from "../donationCard";

interface IDonation {
  name: string;
  quantity: string;
  received: number;
  id: number;
}

const DonationsList = () => {
  const [donations, setDonations] = useState<IDonation[]>([]);

  const { institutionId } = useAuthInstitution();

  const getDonations = () => {
    api
      .get(`/donations?institutionId=${institutionId}`)
      .then((res) => setDonations(res.data))
      .catch((err) => console.log(err));
  };
  //não consegui fazer funcionar sem incluir donations como dependencia
  useEffect(() => {
    getDonations();
  }, [donations]);

  return (
    <>
      <ul>
        {donations.map((donation, index) => {
          return <DonationCard key={index} donation={donation} />;
        })}
      </ul>
    </>
  );
};

export default DonationsList;
