import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Content, Form, Input, Container, Aside } from "./style";
import * as yup from "yup";
import { useLogin } from "../../Providers/Login-Voluntaries";
import { Link, useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import oldman from "../../Assets/img/oldman.svg";
import grandma from "../../Assets/img/grandma.svg";

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
    <Container>
      <Aside>
        <img src={oldman} alt="" />
      </Aside>

      <Content>
        <h2>Entre em sua conta</h2>

        <Form onSubmit={handleSubmit(handleLogin)}>
          <p>Email</p>
          <span>{errors.email?.message}</span>
          <Input type="email" {...register("email")} />

          <p>Senha</p>
          <span>{errors.password?.message}</span>
          <Input type="password" {...register("password")} />
          <Button type="submit">Enviar</Button>
          <div>
            Não possui conta?
            <Link to="/signup-voluntary"> Cadastre-se</Link>
          </div>
        </Form>
      </Content>
      <Aside>
        <img src={grandma} alt="" />
      </Aside>
    </Container>
  );
};
export default VoluntariesLogin;
