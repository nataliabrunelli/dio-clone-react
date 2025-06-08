import { css } from "styled-components";
import styled from "styled-components";

const ButtonContainer = styled.button`
  background-color: #565656;
  border-radius: 22px;
  position: relative;
  color: #fff;
  padding: 2px 16px;
  min-width: 128px;
  font-size: 1rem;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  ${({ type }) =>
    type === "primary" &&
    css`
      min-width: 167px;
      height: 36px;
      background-color: #e4105d;

      &::after {
        content: "";
        position: absolute;
        border: 1px solid #e4105d;
        border-radius: 22px;
        top: -6px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
      }

      &:hover {
        opacity: 1;
        background-color: hsl(338, 86.9%, 55%);
      }
    `}
`;

export { ButtonContainer };
