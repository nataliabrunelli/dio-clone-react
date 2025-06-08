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

const Header = ({ autenticado }) => {
  return (
    <HeaderContainer>
      <Wrapper>
        <Row>
          <img src={logo} alt="logo" />
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
              <Menu href="#">Home</Menu>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </Wrapper>
    </HeaderContainer>
  );
};

export { Header };
