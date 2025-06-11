import { useNavigate } from "react-router";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import {
  MainContainer,
  Title,
  TextContent,
  Form,
  Row,
  ExtraText,
} from "./styles";
import { Input } from "../../components/Input";
import email from "../../icons/mail.svg";
import password from "../../icons/lock.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";

const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(5, "No mínimo 5 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmit = async (formData) => {
    try {
      const {data} = await api.get(`users?email=${formData.email}`)
      if (data.length > 0 ) {
        if (data[0].password === formData.password) {
          navigate("/feed")
        } else {
          alert("Senha inválida")
        }
      }
    } catch {
      alert("Usuário não encontrado!")
    }    
  };

  return (
    <>
      <Header />
      <MainContainer>
        <div>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title>Faça seu cadastro</Title>
          <TextContent>Faça seu login e make the change._</TextContent>
          <Input
            control={control}
            errorMessage={errors.email?.message}
            name="email"
            type="email"
            icon={email}
            placeholder="E-mail"
          />
          <Input
            control={control}
            errorMessage={errors.password?.message}
            name="password"
            type="password"
            icon={password}
            placeholder="Password"
          />
          <Button type="primary" title="Entrar" />
          <Row>
            <ExtraText type="forgot">Esqueci minha senha</ExtraText>
            <ExtraText onClick={() => navigate("/signin")}>Criar conta</ExtraText>
          </Row>
        </Form>
      </MainContainer>
    </>
  );
};

export { Login };
