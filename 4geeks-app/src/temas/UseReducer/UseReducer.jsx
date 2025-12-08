import { useReducer, useState } from "react"

const contadorReducer = (state, action) => {
    switch(action.type) {
        case "INCREMENTAR":
            return {...state, contador:state.contador + 1}
        case "DECREMENTAR":
            return {...state, contador:state.contador - 1}
        case "REINICIAR":
            return {...state, contador:0}
        default:
            return state
    }
}

const UseReducer = () => {
    // Ejemplo con useState
    /* const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    }

    const decrementar = () => {
        setContador(contador - 1);
    } */

    // Ejemplo con useReducer
    const [state, dispatch] = useReducer(contadorReducer, {contador:0});

    const incrementar = () => {
        dispatch({type:"INCREMENTAR"});
    }

    const decrementar = () => {
        dispatch({type:"DECREMENTAR"});
    }

    const reiniciar = () => {
        dispatch({type:"REINICIAR"});
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>UseReducer</h1>
                    <p>Contador: {state.contador}</p>
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-primary" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-primary">{state.contador}</button>
                        <button type="button" className="btn btn-primary" onClick={incrementar}>+</button>
                        <button type="button" className="btn btn-primary" onClick={reiniciar}>Reiniciar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseReducer