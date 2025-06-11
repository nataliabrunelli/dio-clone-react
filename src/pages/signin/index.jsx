import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { ExtraText, Form, MainContainer, Row, Title } from "./styles";
import profile from "../../icons/profile.svg";
import mail from "../../icons/mail.svg";
import lock from "../../icons/lock.svg";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router";
import { api } from "../../services/api";

const schema = yup
  .object({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(5, "No mínimo 5 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Signin = () => {
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
    await api.get(`/users?email=${formData.email}`);
    
    alert("E-mail já cadastrado!");

  } catch (error) {

    if (error.response && error.response.status === 404) {

      try {
        await api.post("/users", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });

        alert("Conta criada com sucesso!");
        navigate("/login");

      } catch (postError) {

        console.error("Erro ao tentar criar a conta:", postError);
        alert("Ocorreu um erro ao criar a conta. Tente novamente mais tarde.");
      }

    } else {

      console.error("Erro inesperado na verificação de usuário:", error);
      alert("Ocorreu um erro inesperado. Verifique sua conexão e tente novamente.");
    }
  }
};

  return (
    <>
      <Header />
      <MainContainer>
        <Title>
          A plataforma para você aprender com experts, dominar as principais
          tecnologias e entrar mais rápido nas empresas mais desejadas.
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Title>Comece agora grátis</Title>
            <p>Crie sua conta e make the change._</p>
          </div>
          <div>
            <Input
              control={control}
              name="name"
              type="text"
              icon={profile}
              placeholder="Nome Completo"
              errorMessage={errors.name?.message}
            />
            <Input
              control={control}
              name="email"
              type="email"
              icon={mail}
              placeholder="E-mail"
              errorMessage={errors.email?.message}
            />
            <Input
              control={control}
              name="password"
              type="password"
              icon={lock}
              placeholder="Password"
              errorMessage={errors.password?.message}
            />
          </div>
          <Button type="primary" title="Criar minha conta" />
          <div>
            <p>
              Ao clicar em "criar minha conta grátis", declaro que aceito as
              Políticas de Privacidade e os Termos de Uso da DIO.
            </p>
            <Row>
              <ExtraText>Já tenho conta.</ExtraText>
              <ExtraText type="login" onClick={() => navigate("/login")}>
                Fazer login
              </ExtraText>
            </Row>
          </div>
        </Form>
      </MainContainer>
    </>
  );
};

export { Signin };
