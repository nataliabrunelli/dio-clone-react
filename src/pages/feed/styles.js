import styled from "styled-components";

const MainContainer = styled.main`
  width: 100%;
  max-width: 80%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding-top: 125px;
`;

const Avatar = styled.img`
  width: 47px;
  height: 47px;
  border: 3px solid #fff;
  border-radius: 50%;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const FeedCardContainer = styled.div`
  width: 100%;
  max-width: 65%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CardArea = styled.div`
  width: 100%;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow-y: auto;
  scroll-behavior: smooth;

  scrollbar-width: thin;
  scrollbar-color: #888 transparent;
`;

export { MainContainer, Avatar, UserContainer, FeedCardContainer, CardArea };
