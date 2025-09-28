//destructuración
let materias = ["Matemática", "Lengua", "Biología"]

//de arrays

let [uc1, uc2, uc3, uc4 = "No def"] = materias
console.log(uc1)
console.log(uc2)
console.log(uc3)
console.log(uc4)


//de objetos

let persona = {
    nombre: "Sofía",
    edad: 5,
    genero: "m"
}

/* let [n1, e1, g1] = persona
console.log(n1)
console.log(e1)
console.log(g1)
*/

// Spreading (Propagación)

let plan = [...materias,"Pedagogía"]
console.log(plan)