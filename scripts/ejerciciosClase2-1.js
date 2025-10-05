let eleccion, resultadoLogico, ej6Completado = false;

function ejercicio1() {
    console.log("1. Crea una variable nombre con tu nombre y úsala para imprimir un mensaje.");
    const nombre = "Nico";
    console.log(`Hola, mi nombre es ${nombre}.`);
    alert(`1. Creación de un saludo con un nombre definido.\nHola, mi nombre es ${nombre}.`);
}

function ejercicio2() {
    console.log("2. Declara y suma dos números, muestra el resultado en consola.");
    let num1, num2;
    num1 = prompt("2. Declaración de dos números.\nIngresa el primer número para la suma:");
    num2 = prompt("Ingresa el segundo número para la suma:");
    const suma = Number(num1) + Number(num2);
    console.log(`${num1} + ${num2} = ${suma}`);
    alert(`${num1} + ${num2} = ${suma}`);
}

function ejercicio3() {
    console.log("3. Usa operadores lógicos para evaluar si 10 > 5 y 5 < 2.");
    const eval1 = 10 > 5, eval2 = 5 < 2;
    console.log(`10 > 5 es ${eval1} y 5 < 2 es ${eval2}`);
    alert(`3. Operadores lógicos.\n10 > 5 es ${eval1} y 5 < 2 es ${eval2}`);
}

function ejercicio4() {
    console.log("4. Declara variables con let y const y nota las diferencias al intentar cambiarlas.");
    const constante = 50;
    let variable;
    variable = prompt("4. Declaración de variables.\nIngresa un valor para la variable:");
    let variableInicial = variable;
    console.log(`Constante inicial: ${constante}\nVariable inicial: ${variable}`);
    variable = prompt("Ingresa un nuevo valor para la variable:");
    console.log(`Constante final tras el intento de cambio: ${constante}\nVariable final: ${variable}`);
    alert(`Constante inicial: ${constante}\nConstante final: ${constante}\nVariable inicial: ${variableInicial}\nVariable final: ${variable}`);
}

function ejercicio5() {
    console.log("5. Escribe un comentario que explique qué hace tu código.");
    console.log("El comentario en el editor dice: 'Este código realiza varias operaciones básicas de JavaScript como declarar variables, sumar números, usar operadores lógicos, y mostrar resultados en la consola.'.");
    alert("5. Muestra de un comentario:\nEl mismo dice: 'Este código realiza varias operaciones básicas de JavaScript como declarar variables, sumar números, usar operadores lógicos, y mostrar resultados en la consola.'");
}

function ejercicio6() {
    console.log("6. Declara una variable de tipo boolean y úsala en una operación lógica.");
    let valor1, valor2, respuestaLogica;
    valor1 = prompt("6. Uso de una variable booleana en una comparación lógica.\nIngresa un valor para comparar:")
    valor2 = prompt("Ingresa otro valor para comparar:")
    if (valor1 == valor2) {
        resultadoLogico = true;
        respuestaLogica = "iguales";
    } else {
        resultadoLogico = false;
        respuestaLogica = "distintos";
    }
    ej6Completado = true;
    console.log(`${valor1} y ${valor2} son ${respuestaLogica}`);
    alert(`${valor1} y ${valor2} son ${respuestaLogica}`);
}

function ejercicio7() {
    if (!ej6Completado) {
        alert("Primero se debe completar el ejercicio 6.");
    } else {
        console.log("7. Imprime el tipo de dato de una variable usando typeof.");
        console.log(`El tipo de dato de la variable anterior es ${typeof resultadoLogico}\n`);
        alert(`7. Tipo de dato de la variable booleana anterior.\nEl tipo de dato de la variable anterior es ${typeof resultadoLogico}`);
    }
}

function ejercicio8() {
    console.log("8. Declara un array y muestra uno de sus elementos en la consola.");
    let arreglo = [];
    arreglo = prompt("8. Arreglo de elementos.\nIngresa varios valores separados por comas:").split(", ");
    console.log(`El arreglo ingresado es: ${arreglo}`);
    alert(`8. Muestra de un arreglo.\nEl arreglo ingresado es: [${arreglo}]`);
}

function ejercicio9() {
    console.log("9. Usa una operación con % para encontrar el resto de 17 ÷ 3.");
    console.log(`El resto de 17 ÷ 3 es ${17 % 3}`);
    alert(`9. Módulo de una división.\nEl resto de 17 ÷ 3 es ${17 % 3}`);
}

function ejercicio10() {
    console.log("10. Declara una variable sin valor e imprime su valor inicial.");
    let sinValor;
    console.log(`El valor inicial de una variable sin valor es ${sinValor}`);
    alert(`10. Variable sin valor.\nSu valor inicial es: ${sinValor}`);
}

window.ejercicio1 = ejercicio1;
window.ejercicio2 = ejercicio2;
window.ejercicio3 = ejercicio3;
window.ejercicio4 = ejercicio4;
window.ejercicio5 = ejercicio5;
window.ejercicio6 = ejercicio6;
window.ejercicio7 = ejercicio7;
window.ejercicio8 = ejercicio8;
window.ejercicio9 = ejercicio9;
window.ejercicio10 = ejercicio10;