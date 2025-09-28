// loops (Bucles) es una estructura de control que permite realizar una tarea repetitiva

// for

for (let i = 0; i < 5; i++){
    console.log("Hola " + i)
}

const numeros = [1,2,3,4,5,6,7]

for (let i = 0; i < numeros.length; i++){
    console.log(`Número: ${numeros[i]}`)
}

// while 

// do while (se ejecuta al menos una vez)

i = 0
do {
console.log(`Vez: ${i}`)
i++
} while (i < 6)


// for of

let miConjunto = new Set(["Juan", "Carlos", 39, "Docente", true])

for (let valor of miConjunto){
    console.log(valor)
}


// Buenas Prácticas

//incorporar Break y Continue