import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contactos = () => {
    const SLUG = "javierveron";
    const BASEURL = "https://playground.4geeks.com/contact";
    const [contacts, setContacts] = useState([]);

    const obtenerContactos = () => {
        fetch(BASEURL + "/agendas/" + SLUG)
        .then(response => {                      
            if (response.status == 200) {                                
                return response.json();
            }

            return false;
        })
        .then(result => {            
            setContacts(result.contacts);

            return true;
        })
    }

    const crearUsuario = () => {
        fetch(BASEURL + "/agendas/" + SLUG, {
            method:"POST"
        })
        .then(response => response.json())
        .then(result => {
            setContacts([]);
        })
    }

    useEffect(() => {
        if (!obtenerContactos()) {
            crearUsuario();
        }
    }, [])

    const eliminarUsuario = (id) => {
        const confirmar = confirm("Desea Eliminar el Usuario #" + id + "?");

        if (confirmar) {
            fetch(BASEURL + "/agendas/" + SLUG + "/contacts/" + id, {
                method:"DELETE"
            })
            .then(response => {
                if (response.status == 204) {
                    console.log("El Usuario #" + id + " se ha eliminado correctamente!");
                }
            });
        }
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2>Contactos</h2>
                    <p className="text-end"><Link to={"/addcontact"} className="btn btn-success"><i className="bi bi-person"></i> Agregar Contacto</Link></p>
                    {contacts.length == 0 ? <p className="my-5 text-center fw-bold">No se encontraron Contactos!</p> : 
                    <table className="table">
                        <tbody>
                            {
                            contacts.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}<br />
                                        <i className="bi bi-house"></i> {item.address}<br />
                                        <i className="bi bi-envelope"></i> {item.email}<br />
                                        <i className="bi bi-pen"></i> {item.phone}</td>
                                    <td className="text-end">
                                        <i className="bi bi-pencil-square mx-1"></i>
                                        <i className="bi bi-trash" onClick={() => {eliminarUsuario(item.id)}}></i>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>}
                </div>
            </div>
        </div>
    )
}

export default Contactos