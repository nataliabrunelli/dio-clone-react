import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  color: #ffffffcc;
  text-transform: uppercase;
`;

export { Container, Title };
