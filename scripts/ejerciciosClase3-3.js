/*
    1. Crea un arreglo con 5 números y muestra el tercero en consola.
    2. Agrega un nuevo elemento a un arreglo usando push.
    3. Elimina el último elemento de un arreglo y muéstralo en consola.
    4. Usa map para multiplicar por 2 cada número de un arreglo.
    5. Filtra un arreglo para obtener solo los números mayores a 10.
    6. Declara un objeto con las propiedades nombre, edad, y profesión.
    7. Accede y muestra el valor de una propiedad de un objeto.
    8. Agrega un método a un objeto que devuelva un saludo personalizado.
    9. Usa reduce para sumar todos los números de un arreglo.
    10. Combina arreglos y objetos: Crea un arreglo de objetos y recórrelo para mostrar el nombre de cada elemento.
*/
let arreglos = [
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100)
]
console.log("Arreglo inicial:", arreglos);

function ejercicio1() {
    console.log("1. Crea un arreglo con 5 números y muestra el tercero en consola.");
    console.log("Tercer arreglo:", arreglos[2]);
}

function ejercicio2() {
    console.log("2. Agrega un nuevo elemento a un arreglo usando push.");
    console.log("Arreglo original:", arreglos);
    console.log("Longitud original:", arreglos.length);
    
    // Agregado de un valor aleatorio
    arreglos.push(Math.floor(Math.random() * 100));
    console.log("Nuevo arreglo:", arreglos);
    console.log("Nueva longitud:", arreglos.push());
}

function ejercicio3() {
    console.log("3. Elimina el último elemento de un arreglo y muéstralo en consola.");
    if (arreglos.length === 0) {
        console.log("El arreglo está vacío, no se puede eliminar ningún elemento.");
        return;
    }
    console.log("Arreglo original:", arreglos);
    console.log("Longitud original:", arreglos.length);
    const eliminado = arreglos.pop();
    console.log("Elemento eliminado:", eliminado);
    console.log("Nuevo arreglo:", arreglos);
    console.log("Nueva longitud:", arreglos.length);
}

function ejercicio4() {
    console.log("4. Usa map para multiplicar por 2 cada número de un arreglo.");
    console.log("Arreglo original:", arreglos);
    const multiplicado = arreglos.map(num => num * 2);
    console.log("Arreglo multiplicado por 2:", multiplicado);
}

function ejercicio5() {
    console.log("5. Filtra un arreglo para obtener solo los números mayores a 10.");
    console.log("Arreglo original:", arreglos);
    const filtrado = arreglos.filter(num => num > 10);
    console.log("Números mayores a 10:", filtrado); 
}

function ejercicio6() {
    console.log("6. Declara un objeto con las propiedades nombre, edad, y profesión.");
    const persona = {
        nombre: "Juan Pérez",
        edad: 30,
        profesion: "Desarrollador"
    };
    console.log("Objeto persona:", persona);
}

function ejercicio7() {
    console.log("7. Accede y muestra el valor de una propiedad de un objeto.");
    const persona = {
        nombre: "Juan Pérez",
        edad: 30,
        desarrollador: "Desarrollador"
    }
    console.log("Nombre de la persona:", persona.nombre);
}

function ejercicio8() {
    console.log("8. Agrega un método a un objeto que devuelva un saludo personalizado.");
    const persona = {
        nombre: "Ana Gómez",
        edad: 28,
        profesion: "Diseñadora"
    }
    function saludo() {
        return `Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`;
    }
    console.log(saludo());
}

function ejercicio9() {
    console.log("9. Usa reduce para sumar todos los números de un arreglo.");
}

function ejercicio10() {
    console.log("10. Combina arreglos y objetos: Crea un arreglo de objetos y recórrelo para mostrar el nombre de cada elemento.");
}
