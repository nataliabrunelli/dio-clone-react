import { useNavigate } from "react-router";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { MainContainer, Title, TextContent, Form, Row, ExtraText } from "./styles";
import { Input } from "../../components/Input";
import email from "../../icons/mail.svg";
import password from "../../icons/lock.svg";

const Login = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/feed")
  }

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
        <Form>
          <Title>Faça seu cadastro</Title>
          <TextContent>Faça seu login e make the change._</TextContent>
          <Input type="email" icon={email} placeholder="E-mail" />
          <Input type="password" icon={password} placeholder="Password" />
          <Button type="primary" title="Entrar" onClick={handleClickSignIn} />
          <Row>
            <ExtraText type="forgot">Esqueci minha senha</ExtraText>
            <ExtraText>Criar conta</ExtraText>
          </Row>
        </Form>
      </MainContainer>
    </>
  );
};

export { Login };
