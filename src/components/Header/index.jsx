import { Button } from "../Button";
import {
  BuscarInputContainer,
  HeaderContainer,
  InputSearch,
  Menu,
  Row,
  Wrapper,
} from "./styles";
import logo from "../../img/logo.svg";
import icon from "../../icons/search.svg";
import { Avatar } from "../../pages/feed/styles";
import avatar from "../../img/avatar.png"
import { useNavigate } from "react-router";

const Header = ({ autenticado }) => {
  const navigate = useNavigate()

  const handleNav = (title) => {
    if (title === "Entrar") {
      navigate("/login")
    } else {
      navigate("/signin")
    }
  }

  const handleClick = (e) => {
    e.preventDefault()
    navigate("/")
  }

  return (
    <HeaderContainer>
      <Wrapper>
        <Row>
          <img src={logo} alt="logo" onClick={() => navigate("/")} />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <img src={icon} />
                <InputSearch placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu href="#">Live Code</Menu>
              <Menu href="#">Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <Avatar src={avatar} />
          ) : (
            <>
              <Menu href="#" onClick={(e) => handleClick(e)} >Home</Menu>
              <Button title="Entrar" onClick={() => handleNav("Entrar")} />
              <Button title="Cadastrar" onClick={() => handleNav("Cadastrar")} />
            </>
          )}
        </Row>
      </Wrapper>
    </HeaderContainer>
  );
};

export { Header };
