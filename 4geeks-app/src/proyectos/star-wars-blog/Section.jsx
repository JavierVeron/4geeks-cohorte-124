import { useEffect, useState } from "react"
import imagenNoDisponible from "../../assets/imagen-no-disponible.png";
import Card from "./Card";

const Section = ({name, urlApi, urlImagen, itemsSinImagen}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(urlApi)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(item => {                               
                item.image = itemsSinImagen.includes(parseInt(item.uid)) ? imagenNoDisponible : urlImagen + item.uid + ".jpg";
            })

            setItems(data.results);
        })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <h2>{name}</h2>
                {
                    items.map(item => (
                        <Card key={item.id} item={item} name={name} />
                    ))
                }
                <hr />
            </div>
        </div>
    )
}

export default Section