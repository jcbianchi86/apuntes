// Hagan una funcion que reciba nombre, apellido y un callback
// Dentro la funcion que acaban de crear, definan una variable nombreCompleto combinando el nombre 
// y el apellido
// Pasar nombreCompleto como argumento de la funcion callback que recibieron por parametro en el punto 1.

// La funciona callback que pasan a la funcion de orden superior, 
// debe recibir por parametro un nombreCompleto y retornar "Hola " + nombreCompleto


function saludarNombreCompleto(nombre, apellido, callback){
    console.log("iniciando");
    const nombreCompleto = nombre + " " + apellido;
    callback(nombreCompleto);
    console.log("Finalizando");
    }

function saludar(a){
    const saludo = "Hola " + a;
        console.log(saludo);
}

saludarNombreCompleto ("Juan", "Frederich", saludar);
saludarNombreCompleto ("Sofía", "Malena", saludar);

