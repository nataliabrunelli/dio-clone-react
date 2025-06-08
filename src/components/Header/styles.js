import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderContainer = styled.header`
  background-color: #151515;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`

const BuscarInputContainer = styled.div`
  width: 275px;
  height: 36px;
  background-color: #2D2D37;
  border-radius: 8px;
  padding: 2px 12px;
  margin: 0 12px;
  display: flex;
  align-items: center;
  gap: .5rem;
  transition: 0.3s ease;

   &:focus-within {
    box-shadow: 0 0 0 2px hsl(0, 0.00%, 90.00%);
  }
`

const Menu = styled.a`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  color: #fff;
  margin-right: 12px;
  transition: 0.3s ease;

  &:hover {
    color:hsl(338, 86.90%, 65%);
  }
`

const UserPicture = styled.img`
  width: 32px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 2px solid #fff;
`

const InputSearch = styled.input`
  background-color: transparent;
  flex: 1;
  border: none;
  outline: none;
  color: #fff;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export { HeaderContainer, Wrapper, BuscarInputContainer, Menu, UserPicture, InputSearch, Row }