import { Card } from "../../components/Card";
import { Title } from "../../components/WeekRank/styles";
import { Header } from "../../components/Header";
import { WeekRank } from "../../components/WeekRank";
import { CardArea, FeedCardContainer, MainContainer } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <MainContainer>
        <FeedCardContainer>
          <Title>Feed</Title>
          <CardArea>
            <Card />
            <Card />
            <Card />
          </CardArea>
        </FeedCardContainer>
        <WeekRank />
      </MainContainer>
    </>
  );
};

export { Feed };
