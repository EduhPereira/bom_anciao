import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";
import { useAuthInstitution } from "../../Providers/Institution-Provider";
import { useState } from "react";

interface ISolicitation {
  name: string;
  quantity: number;
  description?: string;
  idInstitution: number;
}

const NewDonationForm = () => {
  // const { token } = useAuthInstitution();
  //chumbei um token para testes antes de poder usar a autenticação do provider
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imlkb3Nvc0BtYWlsLmNvbSIsImlhdCI6MTYzMTI5OTA5MywiZXhwIjoxNjMxMzAyNjkzLCJzdWIiOiI5In0.06cP3h6mNrud-dWZhat7VMJpmAPcaCsM3LRSLsBjQwY"
  );
  console.log(token);

  const { register, handleSubmit, reset } = useForm<ISolicitation>();

  //POST para criar doações. Chumbei um valor para idInstitution
  const handleSolicitation = ({
    name,
    quantity,
    description,
    idInstitution = 9,
  }: ISolicitation) => {
    api
      .post(
        "/donations",
        { name, quantity, description, idInstitution },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        reset();
        toast.success("Solicitação criada!");
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
      <div className="main-container">
        <div className="form-container">
          <h3>Nova Solicitação</h3>
          <form onSubmit={handleSubmit(handleSolicitation)}>
            <label>Nome do item</label>
            <input type="text" required {...register("name")} />
            <label>Meta | Quantidade</label>
            <input type="text" required {...register("quantity")} />
            <label>Descrição</label>
            <input type="text" {...register("description")} />
            <button type="submit">Salvar</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default NewDonationForm;
