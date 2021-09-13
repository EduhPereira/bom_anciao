import { useEffect, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { SubmitHandler, useForm } from "react-hook-form";

import InstitutionMenu from "../../components/institutionMenu";

import { Container, Contents } from "./style";

import api from "../../services/api";
import { useAuthInstitution } from "../../Providers/Institution-Provider";

interface InputData {
  name: string;
  email: string;
  address: string;
  city: string;
  about: string;
}

const InstitutionProfile = () => {
  const showMenu = () => {
    setVisible(true);
  };

  const [visible, setVisible] = useState(false);

  const [userInfo, setUserInfo] = useState([]);

  const [editable, setEditable] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const { institutionId, token } = useAuthInstitution();

  const userInfoData = async () => {
    const response = await api.get(`/users?id=${institutionId}`);
    setUserInfo(response.data);
  };

  const updateUserInfo = (data: InputData) => {
    api.patch(`/users/${institutionId}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  };
  useEffect(() => {
    userInfoData();
  }, []);

  const edit = () => {
    setEditable(true);
  };

  const cancel = () => {
    setEditable(false);
  };
  const handleSave: SubmitHandler<InputData> = (data: InputData) => {
    updateUserInfo(data);
    setEditable(false);
    reset();
  };

  console.log(editable);

  return (
    <Container>
      <InstitutionMenu visible={visible} setVisible={setVisible} />
      <BiMenuAltLeft className="Open" onClick={showMenu} />
      <Contents>
        {!editable ? (
          <>
            <section className="Card">
              <h2>Meus Dados</h2>
              {userInfo.map((elem: any) => (
                <div>
                  <p>Nome: {elem.name}</p>
                  <p>Email: {elem.email}</p>
                  <p>Endereço: {elem.address}</p>
                  <p>Cidade: {elem.city}</p>
                  <p>CNPJ: {elem.cnpj}</p>
                  <p>Sobre: {elem.about}</p>
                </div>
              ))}
            </section>
            <button onClick={edit}>Editar</button>
          </>
        ) : (
          <div>
            <form onSubmit={handleSubmit(handleSave)}>
              <p>Nome</p>
              <input type="text" {...register("name")} />
              <p>Email</p>
              <input type="email" {...register("email")} />
              <p>Endereço</p>
              <input type="text" {...register("address")} />
              <p>Cidade</p>
              <input type="text" {...register("city")} />
              <p>Sobre</p>
              <textarea {...register("about")} />
              <button onClick={cancel}>Cancelar</button>
              <button type="submit">Salvar</button>
            </form>
          </div>
        )}
      </Contents>
    </Container>
  );
};
export default InstitutionProfile;
