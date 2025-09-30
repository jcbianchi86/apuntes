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

    // --- Getters ---

    get nombre() {
        return this.#nombre
    }

    get apellido() {
        return this.#apellido
    }

    get edad() {
        return this.#edad
    }

    get banco() {
        return this.#banco
    }

    // --- Setters ---

    set nombre(nuevoNombre) { 
        if (typeof nuevoNombre === 'string' && nuevoNombre.trim().length > 0) {
            this.#nombre = nuevoNombre
        } else {
            console.error("El nombre debe ser un texto válido, chango. 😉")
        }
    }

    set apellido(nuevoApellido) { 
        this.#apellido = nuevoApellido
    }

    set edad(nuevaEdad) { 
        if (Number.isInteger(nuevaEdad) && nuevaEdad >= 0) {
            this.#edad = nuevaEdad
        } else {
            console.error("La edad debe ser un número entero positivo.")
        }
    }

    set banco(nuevoBanco) {
        this.#banco = nuevoBanco
    }
}

let persona4 = new PersonaGet("Mara", "Montiel", 39, "MP")

let persona5 = new PersonaGet("José", "Álvarez", 24, "NaranjaX")


console.log(persona4.banco)

//Asignamos el valor al banco de persona5 mediante setter

persona5.banco = "PersonalPay"
persona5.edad = 40
persona5.nombre = "Julian"

console.log(persona5.banco)
console.log(persona5.edad)
console.log(persona5.nombre)
