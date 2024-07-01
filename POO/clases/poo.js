class Animal {
    constructor(especie,edad,color){
        this.especie = especie
        this.edad = edad
        this.color = color
        this.info = `Soy ${this.especie}, tengo ${this.edad} años de edad y soy de color ${this.color}`
    }
    verInfo(){
        document.write(this.info)
    }
}

class Perro extends Animal {
    constructor(especie, edad, color, raza){
        super(especie, edad, color)
        this.raza = null
    }

    set setRaza(newRaza){
        this.raza = newRaza
    }

    get getRaza(){
        return this.raza
    }
}

const perro = new Perro("perro", 5, "negro", "rogwailer")
const caballo = new Animal("caballo", 10, "blanco")
const sapo = new Animal("sapo", 2, "verde")
const pajaro = new Animal("pajaro", 1, "negro")

perro.setRaza = "Pedro"

document.write(perro.getRaza) 