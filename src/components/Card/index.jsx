import {
  CardContainer,
  Content,
  ImagemBg,
  Likes,
  Paragraph,
  Tags,
  Title,
} from "./styles";
import { Avatar, UserContainer } from "../../pages/feed/styles";
import card from "../../img/card.svg";
import avatar from "../../img/avatar.png";
import { FaThumbsUp } from "react-icons/fa";
import { useState } from "react";

const Card = () => {
  const [ contador, setContador ] = useState(10);

  return (
    <CardContainer>
      <ImagemBg src={card} />
      <Content>
        <UserContainer>
          <Avatar src={avatar} />
          <div>
            <Title>Natália Brunelli</Title>
            <Paragraph>Há 8 minutos</Paragraph>
          </div>
        </UserContainer>
        <div>
          <Title>Projeto para a Formação React Developer</Title>
          <Paragraph>
            Projeto feito com React e seu ecosistema juntamente com Styled
            Compoenets... <b>Ver Mais</b>
          </Paragraph>
        </div>
        <Tags>#React #StyledComponents #FrontEnd</Tags>
        <Likes>
          <FaThumbsUp onClick={() => setContador(contador + 1)} /> {contador}
        </Likes>
      </Content>
    </CardContainer>
  );
};

export { Card };
