import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { Input, Button, RegisterStyled } from "./styles";

interface IRegisterInstitution {
  nameInstitution: string;
  email: string;
  cnpj: number;
  address: string;
  password: string;
}

const RegisterInstitution = () => {
  const schema = yup.object().shape({
    nameInstitution: yup
      .string()
      .required("Campo obrigatório.")
      .matches(/^[aA-zZ\s]+$/, "Somente letras são permitidas"),
    email: yup.string().email("Email inválido").required("Campo obrigatório."),
    cnpj: yup
      .string()
      .required("Campo obrigatório.")
      .matches(
        /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/,
        "Somente números são permitidos."
      ),
    addres: yup.string().required("Campo obrigatório."),
    password: yup
      .string()
      .min(6, "Mínimo de seis caracteres.")
      .required("Campo obrigatório."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleRegister = (registerData: IRegisterInstitution) => {
    console.log(registerData);
    toast.success("Conta criada com sucesso!");
  };

  return (
    <div>
      <RegisterStyled onSubmit={handleSubmit(handleRegister)}>
        <h2>Crie sua conta</h2>
        <label htmlFor="nameInstitution">
          Nome da instituição:
          <span className="error">
            {errors.nameInstitution && errors.nameInstitution?.message}
          </span>
        </label>
        <Input type="text" {...register("nameInstitution")} />

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

        <label htmlFor="emacnpjil">
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
          Já possui conta?{" "}
          <span /* onClick={() => history.push("/login")} */>Entre</span>
        </span>
      </RegisterStyled>
    </div>
  );
};
export default RegisterInstitution;
