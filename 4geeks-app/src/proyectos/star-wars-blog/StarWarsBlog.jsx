import People from "./People"
import Vehicles from "./Vehicles"
import Planets from "./Planets"
import Section from "./Section"

const StarWarsBlog = () => {
    const peopleName = "People";
    const peopleUrlApi = "https://www.swapi.tech/api/people/";
    const peopleUrlImage = "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/";
    const peopleItemsSinImagen = [];
    const vehiclesName = "Vehicles";
    const vehiclesUrlApi = "https://www.swapi.tech/api/vehicles/";
    const vehiclesUrlImage = "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/vehicles/";
    const vehiclesItemsSinImagen = [];
    const planetsName = "Planets";
    const planetsUrlApi = "https://www.swapi.tech/api/planets/";
    const planetsUrlImage = "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/";
    const planetsItemsSinImagen = [1];

    return (
        <>
            {/* <People />
            <Vehicles />
            <Planets /> */}
            <Section name={peopleName} urlApi={peopleUrlApi} urlImagen={peopleUrlImage} itemsSinImagen={peopleItemsSinImagen} />
            <Section name={vehiclesName} urlApi={vehiclesUrlApi} urlImagen={vehiclesUrlImage} itemsSinImagen={vehiclesItemsSinImagen} />
            <Section name={planetsName} urlApi={planetsUrlApi} urlImagen={planetsUrlImage} itemsSinImagen={planetsItemsSinImagen} />
        </>
    )
}

export default StarWarsBlog