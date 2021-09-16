import { useEffect, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import VoluntaryMenu from "../../components/voluntaryMenu";

import { Container, Contents, ContainerUpdate, FormUpdate } from "./style";
import { useLogin } from "../../Providers/Login-Voluntaries";
import api from "../../services/api";
import { Loading } from "../../components/loading";
import { yupResolver } from "@hookform/resolvers/yup";

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
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[aA-zZ\s]+$/, "Somente letras são permitidas"),
    email: yup.string().email("email inválido").required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
    address: yup.string().required("Campo obrigatório"),
  });

  const [visible, setVisible] = useState(false);

  const [userInfo, setUserInfo] = useState([]);

  const [editable, setEditable] = useState(false);

  const [control, setControl] = useState<boolean>(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ resolver: yupResolver(formSchema) });

  const { userId, userToken } = useLogin();

  const userInfoData = async () => {
    const response = await api.get(`/users?id=${userId}`);
    await setUserInfo(response.data);
    setControl(true);
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

  return (
    <Container>
      <VoluntaryMenu visible={visible} setVisible={setVisible} />
      <BiMenuAltLeft className="Open" onClick={showMenu} />
      <Contents>
        {!editable ? (
          <>
            <section className="Card">
              <h2>Meus Dados</h2>
              <div>
                {control ? (
                  <>
                    {userInfo.map((elem: any) => (
                      <>
                        <p>Nome: {elem.name}</p>
                        <p>Email: {elem.email}</p>
                        <p>Endereço: {elem.address}</p>
                        <p>Cidade: {elem.city}</p>
                        <p>CPF: {elem.cpf}</p>
                      </>
                    ))}
                  </>
                ) : (
                  <Loading />
                )}
              </div>
            </section>
            <button onClick={edit}>Editar</button>
          </>
        ) : (
          <ContainerUpdate>
            <FormUpdate onSubmit={handleSubmit(handleSave)}>
              <div>
                <p>Nome</p>
                <span>{errors.name?.message}</span>
                <input type="text" {...register("name")} />
              </div>
              <div>
                <p>Email</p>
                <span>{errors.email?.message}</span>
                <input type="email" {...register("email")} />
              </div>
              <div>
                <p>Endereço</p>
                <span>{errors.address?.message}</span>
                <input type="text" {...register("address")} />
              </div>
              <div>
                <p>Cidade</p>
                <span>{errors.city?.message}</span>
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
