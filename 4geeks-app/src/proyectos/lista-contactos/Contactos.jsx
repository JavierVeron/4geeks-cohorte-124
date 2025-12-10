import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contactos = () => {
    const SLUG = "javierveron";
    const BASEURL = "https://playground.4geeks.com/contact";
    const [contacts, setContacts] = useState([]);

    const obtenerUsuario = () => {
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
        if (!obtenerUsuario()) {
            crearUsuario();
        }
    }, [])

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2>Contactos</h2>
                    <p className="text-end"><Link to={"/addcontact"} className="btn btn-success"><i className="bi bi-person"></i> Agregar Contacto</Link></p>
                    {contacts.length == 0 ? <p className="my-5 text-center fw-bold">No se encontraron Contactos!</p> : 
                    <ul className="list-group">
                        {
                            contacts.map(item => (
                                <li key={item.id} className="list-group-item">
                                    <span>
                                        {item.name}<br />
                                        <i className="bi bi-house"></i> {item.address}<br />
                                        <i className="bi bi-envelope"></i> {item.email}<br />
                                        <i className="bi bi-pen"></i> {item.phone}
                                    </span>
                                </li>
                            ))
                        }
                    </ul>}
                </div>
            </div>
        </div>
    )
}

export default Contactos