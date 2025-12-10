import { useEffect, useState } from "react"

const Personajes = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://www.swapi.tech/api/people/")
        .then(response => response.json())
        .then(data => {
            setItems(data.results);
        })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <h1>Personajes</h1>
                {
                    items.map(item => (
                        <div key={item.uid} className="col-md-3">
                            <div className="card mb-3">
                                <img src={"https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/" + item.uid + ".jpg"} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <a href="#" className="btn btn-primary">Ver más</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Personajes