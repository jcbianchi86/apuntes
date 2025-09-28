// Maps  (Diccionario) cada elemento está formado por una clave y un valor

//Declaración

let miMap = new Map()

console.log(miMap)

//Inicialización

miMap = new Map([
    ["nombre","Juan"],
    ["apellido", "Bianchi"],
    ["edad", 39] 
])

console.log(miMap)

//Métodos y Propiedades

// Set

miMap.set("nombre", "Juan Carlos")
console.log(miMap)
// Get
console.log(miMap.get("edad"))

// Has
console.log(miMap.has("apellido"))

// Delete

// Clear

// Keys

// Values

// Entries

// Size
