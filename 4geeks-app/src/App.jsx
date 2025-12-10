import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./proyectos/star-wars-blog/NavBar"
import Error404 from "./proyectos/ecommerce/Error404"
import Personajes from "./proyectos/star-wars-blog/Personajes"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Personajes />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
