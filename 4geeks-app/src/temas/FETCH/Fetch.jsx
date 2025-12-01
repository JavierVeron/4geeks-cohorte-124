import { useEffect, useState } from "react"

const Fetch = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        // Promesas
        // 2 estadíos
        // #1 => Pendiente (pending) (por defecto)
        // #2 => Completada (fullfilled) o Rechazada (rejected)

        const miPromesa = (valor) => {
            return new Promise((resolve, rejected) => {
                console.log("Ejecutando la promesa...");

                if (valor.includes("cine")) {
                    resolve("Wow! Vamos al Cine!")
                } else {
                    rejected("No te invito más! Eres un mal amigo!")
                }
            })
        }

        // Métodos Then y Catch
        // Then => lo vamos a utilizar cuando se complete la promesa
        // Catch > lo vamos a utilizar cuando se rechace la promesa
        /* miPromesa("no puedo, tengo que ir al Mercadona")
        .then(resultado => {
            setItems(<div className="alert alert-success" role="alert">{resultado}</div>)
        })
        .catch(resultado => {
            setItems(<div className="alert alert-danger" role="alert">{resultado}</div>)
        })
        .finally(() => { // Se ejecuta en última lugar, independientemente si se completa o no la promesa
            console.log("Fin del programa!");
        }) */
       

        // Funciones sincrónicas y asíncronicas
        /* console.log("Inicio de Programa"); // ejecuto de forma síncrona

        setTimeout(() => {
            console.log("Mitad de Programa"); // ejecuto de foma asíncrona
        }, 0)

        console.log("Fin de Programa"); */

        // async / await
        /* (async () => {
            const respuesta = await miPromesa("Vamos al cine a ver Tron Ares");
            console.log(respuesta);
        })() */

        // try / catch 
        // try => vamos a poner nuestro código
        // catch => en caso de que falle nuestro código, va a ejecutarse por esta sección

        /* try {
            let valor1 = "contento";
            valor * valor3;
            console.log("Hola chicos! Hoy me siento: " + valor1);
        } catch (error) {
            console.log("Falló mi programa!");
        } */
        
        
        // Consumo de API
        /* fetch('https://fakestoreapi.com/productitos')
        .then(response => response.json())
        .then(resultado => {
            console.log(resultado); 
        })
        .catch(error => {
            console.log("Error en la API: " + error);
        }) */

        /* fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(resultado => {
            setItems(resultado);
        })
        .catch(error => {
            console.log("Error en la API: " + error);
            setError(true);
        }) */

        const ejecutarAPI = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                const data = await response.json();
                setItems(data);
            } catch (error) {
                setError(true);
            }
        }

        ejecutarAPI();
    }, [])

    if (error) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <div className="alert alert-danger" role="alert">
                            <h1>Error en el consumo de la API!</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <h1>Fetch de APIS</h1>
                <ul className="list-group">
                {
                    items.map(item => (
                         <li key={item.id} className="list-group-item">{item.title} ${item.price}</li>
                    ))
                }
                </ul>
            </div>
        </div>
    )
}

export default Fetch