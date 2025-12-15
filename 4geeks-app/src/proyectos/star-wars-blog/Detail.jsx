import { useEffect, useState } from "react"
import imagenNoDisponible from "../../assets/imagen-no-disponible.png";
import { useParams } from "react-router-dom";

const Detail = () => {
    const [item, setItem] = useState({});
    const urlApi = "https://www.swapi.tech/api/";
    const urlImagen = "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/";
    let {section, id} = useParams();
    const itemsSinImagen = {
        people:[],
        vehicles:[],
        planets:[1]
    }

    useEffect(() => {
        fetch(urlApi + section + "/" + id)
        .then(response => response.json())
        .then(data => {             
            data.result.image = itemsSinImagen[section].includes(parseInt(item.uid)) ? imagenNoDisponible : urlImagen + (section == "people" ? "characters" : section) + "/" + data.result.uid + ".jpg";
            setItem(data.result);
        })
    }, [section, id])

    return (
        <div className="container">
            <div className="row">
                <div className="col text-end">
                    <img src={item.image} alt={item.name} className="img-fluid" />
                </div>
                <div className="col">
                    {item.properties ?
                    <div>
                    <h2 className="fw-bold">{item.properties.name && item.properties.name}</h2>
                    <p>{item.description && item.description}</p>
                    {item.properties.gender && <p>Gender: <b>{item.gender}</b></p>}
                    {item.properties.skin_color && <p>Skin Color: <b>{item.properties.skin_color}</b></p>}
                    {item.properties.hair_color && <p>Hair Color: <b>{item.properties.hair_color}</b></p>}
                    {item.properties.eye_color && <p>Eye Color: <b>{item.properties.eye_color}</b></p>}
                    {item.properties.cargo_capacity && <p>Cargo Capacity: <b>{item.properties.cargo_capacity}</b></p>}
                    {item.properties.model && <p>Model: <b>{item.properties.model}</b></p>}
                    {item.properties.manufacturer && <p>Manufacturer: <b>{item.properties.manufacturer}</b></p>}
                    {item.properties.vehicle_class && <p>Vehicle Class: <b>{item.properties.vehicle_class}</b></p>}
                    {item.properties.climate && <p>Climate: <b>{item.properties.climate}</b></p>}
                    {item.properties.terrain && <p>Terrain: <b>{item.properties.terrain}</b></p>}
                    {item.properties.population && <p>Population: <b>{item.properties.population}</b></p>}
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Detail