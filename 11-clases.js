// Class (definimos las propiedades y métodos) - Plantillas

class Persona {
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

    caminar() {
        console.log("La persona está caminando")
    }
}

let persona1 = new Persona ("Sofía", "Bianchi", 5)

console.log(persona1)

class PersonaDefecto {
    constructor(nombre = "Nombre", apellido = "Apellido", edad = "Edad"){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
}

let persona2 = new PersonaDefecto ()



// Acceso a Propiedades

console.log(persona1.edad)
console.log(persona1.caminar())

// Propiedades Privadas

class PersonaPrivado {
    #banco
    constructor(nombre, apellido, edad, banco){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.#banco = banco
    }
}

let persona3 = new PersonaPrivado("Juan Carlos", "Bianchi", 39, "NBCH")

console.log(persona3)

//Getters y Setters 

class PersonaGet {
    #nombre
    #apellido
    #edad
    #banco

    constructor(nombre, apellido, edad, banco){
        this.#nombre = nombre
        this.#apellido = apellido
        this.#edad = edad
        this.#banco = banco
    }

    get nombre(){
        return this.#nombre
    }

    get banco(){
        return this.#banco
    }

    set banco(nuevoBanco){
        this.#banco = nuevoBanco
    }
}

let persona4 = new PersonaGet("Mara", "Montiel", 39, "MP")

let persona5 = new PersonaGet("José", "Álvarez", 24, "NaranjaX")

console.log(persona4.banco)
persona5.banco = "PersonalPay"
console.log(persona5.banco)
