import Carrito from "./temas/componentes/Carrito"
import Error404 from "./temas/componentes/Error404"
import Footer from "./temas/componentes/Footer"
import NavBar from "./temas/componentes/NavBar"
import NoTePierdasNada from "./temas/componentes/NoTePierdasNada"
import Producto from "./temas/componentes/Producto"
import Productos from "./temas/componentes/Productos"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UseReducer from "./temas/componentes/UseReducer"

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
        <NoTePierdasNada />
        <UseReducer />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
