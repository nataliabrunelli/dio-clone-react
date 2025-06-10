import { useNavigate } from "react-router";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { MainContainer, TextContent, Title, TitleHighlight } from "./styles";
import main from "../../img/main.svg"

const Home = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/signin")
  }

  return (
    <>
      <Header />
      <MainContainer>
        <div>
          <Title>
            <TitleHighlight>Implemente</TitleHighlight>o seu futuro global
            <br />
            agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
          </TextContent>
          <Button type="primary" title="Começar agora" onClick={handleClickSignIn} />
        </div>
        <div>
          <img src={main} />
        </div>
      </MainContainer>
    </>
  );
};

export { Home };
