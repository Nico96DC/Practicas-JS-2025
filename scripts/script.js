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
