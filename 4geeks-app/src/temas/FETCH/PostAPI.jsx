import { useEffect, useState } from "react"

const PostAPI = () => {
    const [items, setItems] = useState([]);
    const [usuario, setUsuario] = useState("Layla");
    const [tarea, setTarea] = useState("");
    const [resultadoUsuario, setResultadoUsuario] = useState(false);
    const [resultadoTarea, setResultadoTarea] = useState(false);

    useEffect(() => {
        fetch("https://playground.4geeks.com/todo/users/" + usuario)
        .then(response => response.json())
        .then(data => {            
            setItems(data.todos);
            console.log(data.todos);
            
        })
    }, [resultadoTarea])

    const agregarUsuario = () => {
        fetch("https://playground.4geeks.com/todo/users/" + usuario, {
            method: "POST"
        })
        .then(response => response.json())
        .then(result => {
            setResultadoUsuario(true);
            setUsuario("");
        })
    }

    const agregarTarea = () => {
        fetch("https://playground.4geeks.com/todo/todos/" + usuario, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "label": tarea,
                "is_done": false
            })
        })
        .then(response => response.json())
        .then(result => {
            setResultadoTarea(true);
            setTarea("");
        })
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>Post de Usuarios</h1>
                    <form>
                    <div className="mb-3">
                        <label className="form-label">Usuario</label>
                        <input type="text" className="form-control" value={usuario} onInput={(e) => {setUsuario(e.target.value)}} />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={agregarUsuario}>Agregar Usuario</button>
                    </form>
                    {resultadoUsuario && <div className="alert alert-success my-1" role="alert">Se ha agregado correctamente el Usuario!</div>}
                    <form>
                    <div className="mb-3">
                        <label className="form-label">Tarea</label>
                        <input type="text" className="form-control" value={tarea} onInput={(e) => {setTarea(e.target.value)}} />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={agregarTarea}>Agregar Tarea</button>
                    {resultadoTarea && <div className="alert alert-success my-1" role="alert">Se ha agregado correctamente la Tarea!</div>}
                    </form>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-md-6">
                    <h2>Tareas</h2>
                    <ul className="list-group">
                    {
                        items.map(item => (
                            <li key={item.id} className="list-group-item">{item.label}</li>
                        ))
                    }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PostAPI