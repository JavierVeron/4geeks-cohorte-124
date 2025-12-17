# Variables primitivas
""" nombre = "Facu"
edad = "25"
nuevaEdad = int(edad) + 2
#print("Hola soy " + nombre + " y tengo " + str(nuevaEdad) + " años!")
print(f"Hola soy {nombre} y tengo {nuevaEdad} años!") """

# Arrays
""" nombres = ["Sandra", "Layla", "Facu", "Juan"]
nombres = [{"nombre":"Sandra", "edad":23}, {"nombre":"Layla", "edad":23}, {"nombre":"Facu", "edad":25}, {"nombre":"Juan", "edad":33}] """
#print(nombres)

# Funciones Lambda
""" arrayNombres = map(lambda obj: obj['nombre'], nombres)
listNombres = list(arrayNombres)
print(listNombres) """

# Iteraciones de Listas
""" nombres = ["Sandra", "Layla", "Facu", "Juan", "Hubert"]

for nombre in nombres:
    print(nombre) """

# Como añadir/eliminar datos en un array
""" nombres = ["Sandra", "Layla", "Facu", "Juan", "Hubert"]
#nombres.insert(2, "Carla")
nombres.insert(len(nombres), "Carla") # Insertar un elemento en la última posición
#nombres.remove("Facu")
#nombres = nombres[1:len(nombres)]
nombres = nombres[0:len(nombres)-2]
print(nombres) """

# Diccionarios
""" my_dict = {}
my_dict['nombre'] = "Mario"
my_dict['apellido'] = "Perez"
print(my_dict["nombre"]) """

# Clases
class Auto:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo
    def getAuto(self):
        return "Marca: " + self.marca + " - Modelo: " + self.modelo


miAuto = Auto("Audi", "A3")
print(miAuto.marca + " " + miAuto.modelo)
print(miAuto.getAuto())