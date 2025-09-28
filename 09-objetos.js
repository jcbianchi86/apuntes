

// Objetos (parecidos a Mapas)

//Sintaxis

let persona = {
    nombre: "Sofía",
    edad: 5,
    genero: "m"
}

//Acceder

// Notación Punto
console.log(persona.nombre)

// Notación Corchetes
console.log(persona["nombre"])

// Modificación

persona.nombre = "Sofía Malena" 
console.log(persona.nombre)

//Eliminaicón (delete)

// Métodos

let persona2 = {
    nombre: "Anacleta",
    edad: 65,
    genero: "m",
    caminar: function (){
        console.log(`La persona está caminando.`)
    }
}

persona2.caminar()