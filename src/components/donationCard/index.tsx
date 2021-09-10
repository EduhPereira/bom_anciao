interface IDonation {
  name: string;
  quantity: string;
  received: number;
}

interface IDonationCardProps {
  key: number;
  donation: IDonation;
}

const DonationCard = ({ key, donation }: IDonationCardProps) => {
  return (
    <>
      <li>
        <span>Item: {donation.name}</span> <br />
        <span>Quantidade: {donation.quantity}</span> <br />
        <span>Recebido: {donation.received}</span>
        <button>Remover</button>
        <button>Atualizar</button>
      </li>
    </>
  );
};

export default DonationCard;
