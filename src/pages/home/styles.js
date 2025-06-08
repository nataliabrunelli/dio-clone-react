import styled from "styled-components";

const MainContainer = styled.main`
  width: 100%;
  max-width: 80%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 20px;
`

const TitleHighlight = styled.span`
  display: block;
  color: #E4105D;
`

const TextContent = styled.p`
  font-size: 1rem;
  width: 420px;
  margin-bottom: 50px;
`

export { MainContainer, Title, TitleHighlight, TextContent}