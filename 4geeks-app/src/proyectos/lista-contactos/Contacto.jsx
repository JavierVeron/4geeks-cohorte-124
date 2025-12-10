import { useState } from "react"

const Contacto = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const agregarContacto = (event) => {
        event.preventDefault();
        const SLUG = "javierveron";
        const BASEURL = "https://playground.4geeks.com/contact";

        fetch(BASEURL + "/agendas/" + SLUG + "/contacts", {
            method:"POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({name, phone, email, address})
        })
        .then(response => response.json())
        .then(result => {
            setName("");
            setPhone("");
            setEmail("");
            setAddress("");
            console.log("El Contacto se agregó correctamente!");
        })
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2>Agregar Nuevo Contacto</h2>
                    <form onSubmit={agregarContacto}>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" value={name} onInput={(e) => {setName(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="text" className="form-control" value={phone} onInput={(e) => {setPhone(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" value={email} onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Dirección</label>
                            <input type="text" className="form-control" value={address} onInput={(e) => {setAddress(e.target.value)}} />
                        </div>
                        <button type="submit" className="btn btn-primary">Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacto