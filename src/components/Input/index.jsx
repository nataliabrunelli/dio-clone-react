import { ErrorText, InputContainer, InputText } from "./styles";
import { Controller } from "react-hook-form";

const Input = ({ icon, name, control, errorMessage, ...rest }) => {
  return (
    <>
      <InputContainer hasError = {errorMessage} >
        {icon ? <img src={icon} /> : null}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
      {errorMessage? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
};

export { Input };
