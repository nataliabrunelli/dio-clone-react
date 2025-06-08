import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;
  background-color: #3B4651;
  border-radius: 0 0 5px 5px;
`

const ImagemBg = styled.img`
  width: 100%;
  height: 50%;
`

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 14px;
`

const Title = styled.h2`
  font-size: 1.25rem;
`

const Paragraph = styled.p`
  font-size: 0.85rem;

  b {
    cursor: pointer;
  }

  b:hover {
    opacity: 0.8;
  }
`

const Tags = styled.p`
  font-size: 0.85rem;
  font-weight: 700;
  color: #FFFFFFCC;
`

const Likes = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    cursor: pointer;
  }

  svg:hover {
    opacity: 0.8;
  }
`

export { CardContainer, ImagemBg, Content, Title, Paragraph, Tags, Likes }