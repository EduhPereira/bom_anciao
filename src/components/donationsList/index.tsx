import { useEffect, useState } from "react";
import api from "../../services/api";
import DonationCard from "../donationCard";

interface IDonation {
  name: string;
  quantity: string;
  received: number;
}

const DonationsList = () => {
  const [donations, setDonations] = useState<IDonation[]>([]);
  //id da instituição chumbado por enquanto
  useEffect(() => {
    api
      .get(`donations?idInstitution_like=1`)
      .then((res) => setDonations(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h3>Lista de Doações</h3>
      <ul>
        {donations.map((donation, index) => {
          return <DonationCard key={index} donation={donation} />;
        })}
      </ul>
    </>
  );
};

export default DonationsList;
