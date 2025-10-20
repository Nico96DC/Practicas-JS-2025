// Persona, numero, fruta, auto, musica
const Persona = {
    nombre: "Raul",
    apellido: "Lopez",
    edad: 25,
    ciudad: "Maipú",

    saludo: function() {
        return `Hola, mi nombre es ${this.nombre} ${this.apellido}, tengo ${this.edad} años y vivo en ${this.ciudad}.`;
    }
};
console.log(`Nombre completo: ${Persona.nombre} ${Persona.apellido}\nEdad: ${Persona.edad} años\nCiudad: ${Persona.ciudad}`);
console.log(Persona.saludo());

const numeros = {
    num1: 16,
    num2: 8,
    num3: 72,
    num4: 1,

    suma: function() {
        return this.num1 + this.num2 + this.num3 + this.num4;
    }
}
console.log(`Números ingresados: [${numeros.num1}, ${numeros.num2}, ${numeros.num3}, ${numeros.num4}]`);
console.log(`Suma de ${numeros.num1}, ${numeros.num2}, ${numeros.num3} y ${numeros.num4} es ${numeros.suma()}`);

const frutas = {
    fruta1: "Manzana",
    fruta2: "Banana",
    fruta3: "Cereza",
    fruta4: "Durazno",

    listado: function() {
        return `Frutas: ${this.fruta1}, ${this.fruta2}, ${this.fruta3}, ${this.fruta4}.`;
    }
}
console.log(frutas.listado());

const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    color: "Blanco",

    descripcion: function() {
        return `Auto: ${this.marca} ${this.modelo}, Año: ${this.año}, Color: ${this.color}.`;
    }
}
console.log(auto.descripcion());

const musica = {
    genero: "Rock",
    artista: "Queen",
    cancion: "Bohemian Rhapsody",

    cancionFavorita: function() {
        return `Mi canción favorita es "${this.cancion}" de ${this.artista}, del género ${this.genero}.`;
    }
}
console.log(musica.cancionFavorita());

/*
function limpiarConsola() {
    let limpiado;
    do {
        limpiado = prompt("¿Se limpia la consola? (s/n):").toLowerCase();
    } while (limpiado !== 's' && limpiado !== 'n');
    if (limpiado === 's') {
        console.clear();
    }
}

function realizarOperacion() {
    let num1 = prompt("Script de calculadora\nIngresa el primer número para la operación:");
    console.log(`Primer número ingresado: ${num1}`);
    let num2 = prompt("Ingresa el segundo número para la operación:");
    console.log(`Segundo número ingresado: ${num2}`);

    let operacion = prompt("Ingresa el operador (+, -, *, /):");
    switch (operacion) {
        case "+":
            const suma = Number(num1) + Number(num2);
            console.log(`Resultado: ${num1} + ${num2} = ${suma}`);
            alert(`Resultado: ${num1} + ${num2} = ${suma}`);
            break;
        case "-":
            const resta = Number(num1) - Number(num2);
            console.log(`Resultado: ${num1} - ${num2} = ${resta}`);
            alert(`Resultado: ${num1} - ${num2} = ${resta}`);
            break;
        case "*":
            const multiplicacion = Number(num1) * Number(num2);
            console.log(`Resultado: ${num1} * ${num2} = ${multiplicacion}`);
            alert(`Resultado: ${num1} * ${num2} = ${multiplicacion}`);
            break;
        case "/":
            if (Number(num2) !== 0) {
                const division = Number(num1) / Number(num2);
                console.log(`Resultado: ${num1} / ${num2} = ${division}`);
                alert(`Resultado: ${num1} / ${num2} = ${division}`);
            } else {
                console.log("Error: División por cero no permitida.");
                alert("Error: División por cero no permitida.");
            }
            break;
        default:
            alert("Operador inválido. Solo se permiten +, -, * o /.");
            console.log("Error: Operador inválido.");
            break;
    }
}

let respuesta;
do {
    realizarOperacion();
    limpiarConsola();
    do {
        respuesta = prompt("¿Deseas realizar otra operación? (s/n):").toLowerCase();
    } while (respuesta !== 's' && respuesta !== 'n');
} while (respuesta !== 'n');
*/