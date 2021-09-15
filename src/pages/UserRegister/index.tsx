import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Content, Form, Input, Button, Aside } from "./styles";
import api from "../../services/api";
import { Link } from "react-router-dom";
import oldman from "../../Assets/img/oldman.svg";
import grandma from "../../Assets/img/grandma.svg";

interface IRegister {
  user: string;
  email: string;
  cpf: number;
  address: string;
  password: string;
  confirmPassword: string;
}

const UserRegister = () => {
  const schema = yup.object().shape({
    user: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[aA-zZ\s]+$/, "Somente letras são permitidas"),
    email: yup.string().email("email inválido").required("Campo obrigatório"),

    address: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de oito caracteres")
      .required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRegister>({ resolver: yupResolver(schema) });

  const handleRegister = ({ user, email, address, password }: IRegister) => {
    api
      .post("/register", { user, email, address, password })
      .then(() => {
        reset();
        toast.success("Conta criada com sucesso!");
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
          <Input type="text" {...register("user")} />
          <span className="span-error">{errors.user?.message}</span>

          <label>Email</label>
          <Input type="email" {...register("email")} />
          <span className="span-error">{errors.email?.message}</span>

          <label>Endereço</label>
          <Input type="text" {...register("address")} />
          <span className="span-error">{errors.address?.message}</span>

          <label>Senha</label>
          <Input type="text" {...register("password")} />
          <span className="span-error">{errors.password?.message}</span>

          <label>Confirme sua senha</label>
          <Input type="text" {...register("confirmPassword")} />
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
