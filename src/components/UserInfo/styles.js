import styled from "styled-components";


const Name = styled.h3`
  font-size: 1.25rem;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 9px;
  background-color: #fff;
  border-radius: 6px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ percentual }) => percentual}%;
    height: 9px;
    background-color: #23dd7a;
    border-radius: 6px;
  }
`;

export { Name, ProgressBar };
