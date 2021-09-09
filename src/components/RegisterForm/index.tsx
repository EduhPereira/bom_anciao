import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { RegisterStyled } from "./styles";
interface IRegister {
  user: string;
  email: string;
  cpf: number;
  adress: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const schema = yup.object().shape({
    user: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[aA-zZ\s]+$/, "Somente letras são permitidas"),
    email: yup.string().email("email inválido").required("Campo obrigatório"),
    cpf: yup
      .string()
      .required("Campo obrigatório")
      .min(11, "O CPF deve ter 11 números")
      .matches(/^[0-9]+$/, "Somente números são permitidos"),
    adress: yup.string().required("Campo obrigatório"),
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
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleRegister = (registerData: IRegister) => {
    console.log(registerData);
  };
  return (
    <div className="register-form-container">
      <RegisterStyled onSubmit={handleSubmit(handleRegister)}>
        <input type="text" placeholder="Nome completo" {...register("user")} />
        <span className="span-error">{errors.user?.message}</span>
        <input type="email" placeholder="Email" {...register("email")} />
        <span className="span-error">{errors.email?.message}</span>

        <input
          type="text"
          placeholder="CPF (somente números)"
          {...register("cpf")}
        />
        <span className="span-error">{errors.cpf?.message}</span>

        <input type="text" placeholder="Endereço" {...register("adress")} />
        <span className="span-error">{errors.adress?.message}</span>

        <input type="text" placeholder="Senha" {...register("password")} />

        <span className="span-error">{errors.password?.message}</span>

        <input
          type="text"
          placeholder="Confirme a senha"
          {...register("confirmPassword")}
        />
        <span className="span-error">{errors.confirmPassword?.message}</span>
        <button type="submit">Cadastre-se</button>
      </RegisterStyled>
    </div>
  );
};
export default RegisterForm;
