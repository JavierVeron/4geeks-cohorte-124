// Clases en JavaScript
// Clases con parámetros
/* class Auto {
    constructor(valor1, valor2) {
        this.marca = valor1 // las propiedades son las variables de las clases
        this.modelo = valor2
        this.tipo = "Auto" // valor fijo
        //let marcaModelo = valor1 + " " + valor2;
    }

    getAuto() { // los métodos son las funciones de las clases
        return `Marca: ${this.marca} - Modelo: ${this.modelo} (${this.tipo})`
    }
} */

class Auto {
    #marca // definir las propiedades como privadas
    #modelo
    #tipo

    constructor() {
        this.#marca; // las propiedades son las variables de las clases
        this.#modelo;
        this.#tipo = "Auto";
    }
 
    setMarca(valor) { // setter (función que sobre-escribe el valor de una propiedad protegida)
        this.#marca = valor
    }

    setModelo(valor) {
        this.#modelo = valor
    }

    setTipo(valor) {
        this.#tipo = valor;
    }

    getMarca() { // getter (función que me permite acceder a una propiedad protegida)
        return this.#marca
    }

    getModelo() { // solamente puedo acceder a los valores de dicha propiedad a través de sus métodos
        return this.#modelo
    }

    getTipo() {
        return this.#tipo
    }

    getAuto() { // los métodos son las funciones de las clases
        return `Marca: ${this.#marca} - Modelo: ${this.#modelo} (${this.#tipo})`
    }
}

// Ejemplo 1
/* const auto1 = new Auto("Audi", "A3");
const auto2 = new Auto("Seat", "Ibiza");
const auto3 = new Auto("Mercedes Benz", "SLK", "2.0");
auto3.tipo = "Deportivo"; */
/*¨console.log(auto1.marca);
console.log(auto2.marca);
console.log(auto1.marcaModelo); */
/* console.log(auto1.getAuto());
console.log(auto2.getAuto());
console.log(auto3.getAuto()); */

// Ejemplo2
const auto1 = new Auto();
const auto2 = new Auto();
auto1.setMarca("Audi");
auto1.setModelo("A3");
auto2.setMarca("Seat");
auto2.setModelo("Ibiza");
auto1.setTipo("Deportivo");
//console.log(auto1.getMarca() + " " + auto1.getModelo());
console.log(auto1.getAuto());
console.log(auto2.getAuto());