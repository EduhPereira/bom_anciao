import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useState } from "react";
import { useAuthInstitution } from "../../Providers/Institution-Provider";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterStyled, Input, Button } from "./styles";
import { Link } from "react-router-dom";

interface Institution {
  email: string;
  password: string;
}

const LoginInstitution = () => {
  const { signIn } = useAuthInstitution();
  const history = useHistory();
  const [error, setError] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().email().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 caracteres.")
      .required("Campo obrigatório."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Institution>({ resolver: yupResolver(schema) });

  const onSubmit = (data: Institution) => {
    signIn(data, setError, history);
    reset();
  };

  return (
    <div>
      <RegisterStyled onSubmit={handleSubmit(onSubmit)}>
        <h2>Entre em sua conta</h2>
        <label htmlFor="email">
          Email:
          <span className="error">{errors.email && errors.email?.message}</span>
        </label>
        <Input type="text" {...register("email")} />

        <label htmlFor="password">
          Senha:
          <span className="error">
            {errors.password && errors.password?.message}
          </span>
        </label>
        <Input type="password" {...register("password")} />

        <Button type="submit">Entrar</Button>
        <span>
          Não possui conta?
          <Link to="/signup-institution"> Cadastre-se</Link>
        </span>
      </RegisterStyled>
    </div>
  );
};

export default LoginInstitution;
