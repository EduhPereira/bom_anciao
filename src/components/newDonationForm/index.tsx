import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";
import { useAuthInstitution } from "../../Providers/Institution-Provider";
import { useEffect, useState } from "react";

interface ISolicitation {
  nameInstitution: string;
  name: string;
  quantity: number;
  received?: number;
  description?: string;
  institutionId: number;
}
//fazer get em users usando id da instituicao como parametro e pega o nome da instituicao
const NewDonationForm = () => {
  const { token, institutionId } = useAuthInstitution();
  console.log(institutionId);
  const { register, handleSubmit, reset } = useForm<ISolicitation>();

  async function loadNameInstitution() {
    const response = await api.get(
      `users?type=Institution&&id=${institutionId}`
    );
    const data = response.data;
    console.log(data);
  }

  useEffect(() => {
    loadNameInstitution();
  }, []);

  const handleSolicitation = ({
    name,
    quantity,
    received,
    description,
  }: ISolicitation) => {
    api
      .post(
        `/donations`,
        { name, quantity, description, received, institutionId },
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
