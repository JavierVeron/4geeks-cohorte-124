import { useEffect, useState } from "react"

const Efectos = () => {
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    const incrementarContador1 = () => {
        setContador1(contador1 + 1);
    }

    const incrementarContador2 = () => {
        setContador2(contador2 + 1);
    }

    console.log("#1 - Montaje del Componente");

    // Efectos
    // Ciclo de vida de los Componentes:
    // 1) Montaje del Componente
    // 2) Actualización del Componente
    // 3) Desmontaje del Componente (quita de pantalla el componente)

    // Opción #1 => Con dependencias vacías [] (solo se ejecuta 1 vez) [Recomendable para consumo de APIS]
    useEffect(() => {
        console.log("#2 - Actualización del Componente");

        return () => {
            console.log("#3 - Desmontaje del Componente");
        }
    }, [])

    // Opción #2 => Con dependencias [] (solo se ejecutar cuando la dependencia nombrada sufra alguna modificación (prop, state, algun otro hook))
    /* useEffect(() => {
        console.log("Se modificó el Contador #1");
    }, [contador1])

    useEffect(() => {
        console.log("Se modificó el Contador #2");
    }, [contador2])

    useEffect(() => {
        console.log("Se modificaron los Contadores #1 y #2");
    }, [contador1, contador2]) */

    // Opción #3 => Sin dependencias no ponemos [] (está atentos a todas modificaciones de (prop, state, algun otro hook))
    /* useEffect(() => {
        console.log("Se modificaron los Contadores #1 y #2");
    })  */   

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Efectos</h1>
                    <p>Contador #1: <b>{contador1}</b></p>
                    <button className="btn btn-primary" onClick={incrementarContador1}>Incrementar #1</button>
                    <hr />
                    <p>Contador #2: <b>{contador2}</b></p>
                    <button className="btn btn-primary" onClick={incrementarContador2}>Incrementar #2</button>
                </div>
            </div>
        </div>
    )

}

export default Efectos