import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";
import { useAuthInstitution } from "../../Providers/Institution-Provider";
import { useEffect, useState } from "react";
import { Container } from "./style";

interface IUser {
  email: string;
  password: string;
  name: string;
  address: string;
  type: string;
  id: number;
}
interface ISolicitation {
  nameInstitution: string;
  name: string;
  quantity: number;
  received?: number;
  institutionId: number;
}

interface ISolicitationProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
}
const NewDonationForm = ({ setModal, modal }: ISolicitationProps) => {
  const [nameInstitution, setNameInstitution] = useState<string>("");
  const { token, institutionId } = useAuthInstitution();
  const { register, handleSubmit, reset } = useForm<ISolicitation>();

  async function loadNameInstitution() {
    const response = await api.get(
      `users?type=Institution&&id=${institutionId}`
    );
    const data = response.data.map((inst: IUser) => {
      return inst.name;
    });
    setNameInstitution(data[0]);
  }

  useEffect(() => {
    loadNameInstitution();
  }, []);

  const handleSolicitation = ({ name, quantity }: ISolicitation) => {
    api
      .post(
        `/donations`,
        {
          nameInstitution,
          name,
          quantity: Number(quantity),
          received: 0,
          institutionId: Number(institutionId),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        reset();
        console.log(res);
        toast.success("Solicitação criada!");
        setModal(false);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          toast.error("Algo de errado aconteceu");
        }
      });
  };

  return (
    <>
      {modal && (
        <Container>
          <div>
            <form onSubmit={handleSubmit(handleSolicitation)}>
              <h2>Nova Solicitação</h2>
              <div className="updateForm">
                <label>Nome do item</label>
                <input type="text" required {...register("name")} />
              </div>
              <div className="updateForm">
                <label>Quantidade</label>
                <input type="text" required {...register("quantity")} />
              </div>
              <div className="btns">
                <button className="cancel" onClick={() => setModal(false)}>
                  Cancelar
                </button>
                <button type="submit">Salvar</button>
              </div>
            </form>
          </div>
          <ToastContainer />
        </Container>
      )}
    </>
  );
};

export default NewDonationForm;
