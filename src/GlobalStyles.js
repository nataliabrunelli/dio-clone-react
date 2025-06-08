import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  border: none;
  box-sizing: border-box;
}

#root {
  width: 100vw;
  min-height: 100vh;
  background-color: #1E192C;
  font-family: "Open Sans";
  color: #fff;
}

input {
  font-size: 1rem;
}
`;

export { GlobalStyle };
