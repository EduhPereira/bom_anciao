import { useEffect, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { SubmitHandler, useForm } from "react-hook-form";

import VoluntaryMenu from "../../components/voluntaryMenu";

import { Container, Contents } from "./style";
import { useLogin } from "../../Providers/Login-Voluntaries";
import api from "../../services/api";

interface userInputData {
  name: string;
  email: string;
  address: string;
  city: string;
}

const VoluntariesProfile = () => {
  const showMenu = () => {
    setVisible(true);
  };

  const [visible, setVisible] = useState(false);

  const [userInfo, setUserInfo] = useState([]);

  const [editable, setEditable] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const { userId, userToken } = useLogin();

  const userInfoData = async () => {
    const response = await api.get(`/users?id=${userId}`);
    setUserInfo(response.data);
  };

  const updateUserInfo = (data: userInputData) => {
    api.patch(`/users/${userId}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
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
  const handleSave: SubmitHandler<userInputData> = (data: userInputData) => {
    updateUserInfo(data);
    setEditable(false);
    reset();
  };

  console.log(editable);

  return (
    <Container>
      <VoluntaryMenu visible={visible} setVisible={setVisible} />
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
                  <p>CPF: {elem.cpf}</p>
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
              <button onClick={cancel}>Cancelar</button>
              <button type="submit">Salvar</button>
            </form>
          </div>
        )}
      </Contents>
    </Container>
  );
};
export default VoluntariesProfile;
