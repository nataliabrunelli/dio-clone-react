import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #3B3450;
  display: flex;
  align-items: baseline;
  padding-left: .5rem;
  margin-bottom: 20px;
  gap: .5rem;
`

const InputText = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  height: 30px;
  color: #fff;
`

export { InputContainer, InputText }