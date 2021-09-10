import { useHistory } from "react-router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Button, RegisterStyled } from "./styles";
import { Link } from "react-router-dom";
import { useAuthInstitution } from "../../Providers/Institution-Provider";

interface ISignup {
  name: string;
  email: string;
  address: string;
  password: string;
  cnpj: string;
  city: string;
  type: string;
}

const RegisterInstitution = () => {
  const { signUp } = useAuthInstitution();

  const history = useHistory();
  const [error, setError] = useState(false);
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório."),
    email: yup.string().email("Email inválido").required("Campo obrigatório."),
    cnpj: yup
      .string()
      .required("Campo obrigatório.")
      .matches(
        /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/,
        "Somente números são permitidos."
      ),
    address: yup.string().required("Campo obrigatório."),
    city: yup.string().required("Campo obrigatório."),
    password: yup
      .string()
      .min(6, "Mínimo de seis caracteres.")
      .required("Campo obrigatório."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignup>({ resolver: yupResolver(schema) });

  const handleRegister = (registerData: ISignup) => {
    signUp(registerData, setError, history);
  };

  return (
    <div>
      <RegisterStyled onSubmit={handleSubmit(handleRegister)}>
        <h2>Crie sua conta</h2>
        <label htmlFor="name">
          Nome da instituição:
          <span className="error">{errors.name && errors.name?.message}</span>
        </label>
        <Input type="text" {...register("name")} />

        <label htmlFor="email">
          Email da instituição:
          <span className="error">{errors.email && errors.email?.message}</span>
        </label>
        <Input type="text" {...register("email")} />

        <label htmlFor="address">
          Endereço da instituição:
          <span className="error">
            {errors.address && errors.address?.message}
          </span>
        </label>
        <Input type="text" {...register("address")} />

        <label htmlFor="city">
          Cidade da instituição:
          <span className="error">{errors.city && errors.city?.message}</span>
        </label>
        <Input type="text" {...register("city")} />

        <label htmlFor="cnpj">
          CNPJ:
          <span className="error">{errors.cnpj && errors.cnpj?.message}</span>
        </label>
        <Input type="text" {...register("cnpj")} />

        <label htmlFor="password">
          Senha:
          <span className="error">
            {errors.password && errors.password?.message}
          </span>
        </label>
        <Input type="password" {...register("password")} />

        <Button type="submit">Enviar</Button>
        <span>
          Já possui conta? <Link to="/login-institution">Entre</Link>
        </span>
      </RegisterStyled>
    </div>
  );
};
export default RegisterInstitution;
