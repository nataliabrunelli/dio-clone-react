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

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`

const Title = styled.h2`
  width: 100%;
  max-width: 565px;
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: .5rem;
`

const TextContent = styled.p`
  font-size: 1rem;
  width: 420px;
  margin-bottom: 2.5rem;
`

const Form = styled.form`
  width: 100%;
  max-width: 30%;
  display: flex;
  flex-direction: column;
  gap: 35px;
`

const ExtraText = styled.p`
  font-size: .85rem;
  font-weight: 700;
  cursor: pointer;
  color: ${(props) => props.type === "login" ? "#23DD7A" : "#FFF"};
`

export { MainContainer, Row, Title, TextContent, Form, ExtraText }