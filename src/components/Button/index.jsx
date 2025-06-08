import { ButtonContainer } from "./styles";

const Button = ({ title, type, onClick }) => {
  return (
    <ButtonContainer type={type} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
};

export { Button };
