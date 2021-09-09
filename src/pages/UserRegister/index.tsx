import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RegisterStyled } from "./styles";
import api from "../../services/api";
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
  } = useForm({ resolver: yupResolver(schema) });

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
    <div className="register-form-container">
      <h2>Crie sua conta</h2>
      <RegisterStyled onSubmit={handleSubmit(handleRegister)}>
        <label>Nome completo</label>
        <input type="text" {...register("user")} />
        <span className="span-error">{errors.user?.message}</span>

        <label>Email</label>
        <input type="email" {...register("email")} />
        <span className="span-error">{errors.email?.message}</span>

        <label>Endereço</label>
        <input type="text" {...register("address")} />
        <span className="span-error">{errors.address?.message}</span>

        <label>Senha</label>
        <input type="text" {...register("password")} />
        <span className="span-error">{errors.password?.message}</span>

        <label>Confirme sua senha</label>
        <input type="text" {...register("confirmPassword")} />
        <span className="span-error">{errors.confirmPassword?.message}</span>
        <button type="submit">Enviar</button>
      </RegisterStyled>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
};
export default UserRegister;
