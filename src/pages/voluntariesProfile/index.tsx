import { useEffect, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { SubmitHandler, useForm } from "react-hook-form";

import VoluntaryMenu from "../../components/voluntaryMenu";

import { Container, Contents, ContainerUpdate, FormUpdate } from "./style";
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
  const [userUpdateData, setUpdateData] = useState<any>([]);

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
    const data = userInfo;
  }, [userInfo]);

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
          <ContainerUpdate>
            <FormUpdate onSubmit={handleSubmit(handleSave)}>
              <div>
                <p>Nome</p>
                <input type="text" {...register("name")} />
              </div>
              <div>
                <p>Email</p>
                <input type="email" {...register("email")} />
              </div>
              <div>
                <p>Endereço</p>
                <input type="text" {...register("address")} />
              </div>
              <div>
                <p>Cidade</p>
                <input type="text" {...register("city")} />
              </div>
              <div className="btns">
                <button className="cancel" onClick={cancel}>
                  Cancelar
                </button>
                <button type="submit">Atualizar</button>
              </div>
            </FormUpdate>
          </ContainerUpdate>
        )}
      </Contents>
    </Container>
  );
};
export default VoluntariesProfile;
