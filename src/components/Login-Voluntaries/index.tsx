import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Content, Form, Input } from "./style";
import * as yup from "yup";
import { useLogin } from "../../Providers/Login-Voluntaries/index";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

type LoginData = {
  email: string;
  password: string;
};

const VoluntariesLogin = () => {
  const { singIn } = useLogin();

  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório."),
    password: yup.string().required("Insira sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const handleLogin: SubmitHandler<LoginData> = (data: LoginData) => {
    singIn(data, history);
  };

  return (
    <Content>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <p>Email</p>
        <span>{errors.email?.message}</span>
        <Input type="email" {...register("email")} />

        <p>Senha</p>
        <span>{errors.password?.message}</span>
        <Input type="password" {...register("password")} />
        <Button type="submit">Enviar</Button>
      </Form>
    </Content>
  );
};
export default VoluntariesLogin;
