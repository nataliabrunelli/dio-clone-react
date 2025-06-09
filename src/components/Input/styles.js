import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #3B3450;
  display: flex;
  align-items: baseline;
  padding-left: .5rem;
  gap: .5rem;
  margin-bottom: ${({hasError}) => hasError? "0" : "20"}px;
`

const InputText = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  height: 30px;
  color: #fff;
`


const ErrorText = styled.p`
  font-size: .85rem;
  color: #ff0000; 
  margin-bottom: 20px;
  
`

export { InputContainer, InputText, ErrorText }