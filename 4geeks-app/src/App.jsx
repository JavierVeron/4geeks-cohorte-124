import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./proyectos/ecommerce/NavBar"
import Productos from "./proyectos/ecommerce/Productos"
import Producto from "./proyectos/ecommerce/Producto"
import Carrito from "./proyectos/ecommerce/Carrito"
import Error404 from "./proyectos/ecommerce/Error404"
import Footer from "./proyectos/ecommerce/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Productos />} />
          <Route path={"/productos"} element={<Productos />} />
          <Route path={"/productos/:categoryId"} element={<Productos />} />
          <Route path={"/producto/:productId"} element={<Producto />} />
          <Route path={"/carrito"} element={<Carrito />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
