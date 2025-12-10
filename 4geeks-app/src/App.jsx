import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./proyectos/lista-contactos/NavBar"
import Contactos from "./proyectos/lista-contactos/Contactos"
import Contacto from "./proyectos/lista-contactos/Contacto"
import Error404 from "./proyectos/ecommerce/Error404"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Contactos />} />
          <Route path={"/contact"} element={<Contactos />} />
          <Route path={"/addcontact"} element={<Contacto />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
