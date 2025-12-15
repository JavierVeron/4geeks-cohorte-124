import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./proyectos/star-wars-blog/NavBar"
import Error404 from "./proyectos/ecommerce/Error404"
import StarWarsBlog from "./proyectos/star-wars-blog/StarWarsBlog"
import Detail from "./proyectos/star-wars-blog/Detail"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<StarWarsBlog />} />
          <Route path={"/detail/:section/:id"} element={<Detail />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
