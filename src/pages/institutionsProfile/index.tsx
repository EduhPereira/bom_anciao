import { useEffect, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import InstitutionMenu from "../../components/institutionMenu";
import { Container, Contents, ContainerUpdate, FormUpdate } from "./style";
import api from "../../services/api";
import { useAuthInstitution } from "../../Providers/Institution-Provider";
import { Loading } from "../../components/loading";
import { yupResolver } from "@hookform/resolvers/yup";

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

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[aA-zZ\s]+$/, "Somente letras são permitidas"),
    email: yup.string().email("email inválido").required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
    address: yup.string().required("Campo obrigatório"),
    about: yup.string().required("Campo obrigatório"),
  });

  const [visible, setVisible] = useState(false);

  const [userInfo, setUserInfo] = useState([]);

  const [editable, setEditable] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ resolver: yupResolver(formSchema) });

  const { institutionId, token } = useAuthInstitution();

  const [control, setControl] = useState(false);

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
    const loading = async () => {
      await userInfoData();
      setControl(true);
    };
    loading();
    const data = userInfo;
  }, [userInfo]);

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

  return (
    <Container>
      <InstitutionMenu visible={visible} setVisible={setVisible} />
      <BiMenuAltLeft className="Open" onClick={showMenu} />

      <Contents>
        {!editable ? (
          <>
            <section className="Card">
              <h2>Meus Dados</h2>
              {control ? (
                <>
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
                </>
              ) : (
                <Loading />
              )}
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
              <div>
                <p>Sobre</p>
                <span>{errors.about?.message}</span>
                <textarea {...register("about")} />
              </div>
              <div className="btns">
                <button className="cancel" onClick={cancel}>
                  Cancelar
                </button>
                <button type="submit">Salvar</button>
              </div>
            </FormUpdate>
          </ContainerUpdate>
        )}
      </Contents>
    </Container>
  );
};
export default InstitutionProfile;
