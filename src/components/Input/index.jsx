import { InputContainer, InputText } from "./styles"

const Input = ({ icon, name, ...rest}) => {
  return (
    <InputContainer>
      { icon ? <img src={ icon } /> : null }
      <InputText name={name} {...rest} />
    </InputContainer>
  )
}

export { Input }