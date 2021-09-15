import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Content, Form, Input, Button, Aside } from "./styles";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import oldman from "../../Assets/img/oldman.svg";
import grandma from "../../Assets/img/grandma.svg";
interface IRegister {
  name: string;
  email: string;
  cpf: string;
  city: string;
  address: string;
  type: string;
  password: string;
  confirmPassword: string;
}

const UserRegister = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[aA-zZ\s]+$/, "Somente letras são permitidas"),
    email: yup.string().email("email inválido").required("Campo obrigatório"),
    cpf: yup
      .string()
      .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "CPF inválido.")
      .required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
    address: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de oito caracteres")
      .required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
  });
  const history = useHistory();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRegister>({ resolver: yupResolver(schema) });

  const handleRegister = ({
    name,
    email,
    cpf,
    city,
    address,
    password,
    type = "Voluntary",
  }: IRegister) => {
    api
      .post("/register", { name, email, cpf, city, address, password, type })
      .then(() => {
        reset();
        toast.success("Conta criada com sucesso!");
        history.push("/login-voluntary");
      })
      .catch((err) => {
        if (err) {
          toast.error("Erro ao cadastrar usuário");
        }
      });
  };
  return (
    <Container>
      <Aside>
        <img src={oldman} alt="" />
      </Aside>

      <Content>
        <h2>Crie sua conta</h2>
        <Form onSubmit={handleSubmit(handleRegister)}>
          <label>Nome completo</label>
          <Input type="text" {...register("name")} />
          <span className="span-error">{errors.name?.message}</span>

          <label>Email</label>
          <Input type="email" {...register("email")} />
          <span className="span-error">{errors.email?.message}</span>

          <label>CPF:</label>
          <Input type="text" {...register("cpf")} />
          <span className="span-error">{errors.cpf?.message}</span>

          <label>Cidade</label>
          <Input type="text" {...register("city")} />
          <span className="span-error">{errors.city?.message}</span>

          <label>Endereço</label>
          <Input type="text" {...register("address")} />
          <span className="span-error">{errors.address?.message}</span>

          <label>Senha</label>
          <Input type="password" {...register("password")} />
          <span className="span-error">{errors.password?.message}</span>

          <label>Confirme sua senha</label>
          <Input type="password" {...register("confirmPassword")} />
          <span className="span-error">{errors.confirmPassword?.message}</span>
          <Button type="submit">Enviar</Button>
          <div>
            Já possui conta? <Link to="/login-voluntary">Entre</Link>
          </div>
        </Form>
        <div>
          <ToastContainer />
        </div>
      </Content>

      <Aside>
        <img src={grandma} alt="" />
      </Aside>
    </Container>
  );
};
export default UserRegister;
