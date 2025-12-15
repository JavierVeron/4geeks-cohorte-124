import { useEffect, useState } from "react"
import imagenNoDisponible from "../../assets/imagen-no-disponible.png";
import Card from "./Card";

const Vehicles = () => {    
    const [items, setItems] = useState([]);
    const urlImagen = "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/vehicles/";
    const itemsSinImagen = [];

    useEffect(() => {
        fetch("https://www.swapi.tech/api/vehicles/")
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
                <h2>Vehicles</h2>
                {
                    items.map(item => (
                        <Card key={item.id} item={item} />
                    ))
                }
                <hr />
            </div>
        </div>
    )
}
    
export default Vehicles