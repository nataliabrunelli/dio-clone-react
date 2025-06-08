import { Container, Title } from "./styles";
import { UserInfo } from "../UserInfo";

const WeekRank = () => {
  return (
    <Container>
      <Title># RANKING TOP 5 DA SEMANA</Title>
      <UserInfo name="Natália Brunelli" percentual={80} />
      <UserInfo name="Natália Brunelli" percentual={76} />
      <UserInfo name="Natália Brunelli" percentual={43} />
      <UserInfo name="Natália Brunelli" percentual={35} />
      <UserInfo name="Natália Brunelli" percentual={27} />
    </Container>
  );
};

export { WeekRank };
