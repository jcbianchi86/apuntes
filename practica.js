

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

