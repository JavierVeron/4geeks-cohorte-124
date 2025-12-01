import { useState } from "react"
import Efectos from "./temas/UseEffects/Efectos"

function App() {
  const [visible, setVisible] = useState(true);

  const quitarComponente = () => {
    setVisible(false);
  }

  return (
    <>
      {visible ? <Efectos /> : ""}
      <button className="btn btn-danger" onClick={quitarComponente}>Quitar Componente</button>
    </>
  )
}

export default App
