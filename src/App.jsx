import { BrowserRouter, Routes, Route } from "react-router"
import { GlobalStyle } from "./GlobalStyles"
import { Home } from "./pages/home"
import { Login } from "./pages/login"
import { Feed } from "./pages/feed"
import { Signin } from "./pages/signin"


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signin" element={ <Signin /> } />
        <Route path="/feed" element={ <Feed /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
