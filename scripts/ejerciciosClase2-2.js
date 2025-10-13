let eleccion;

function ejercicio1() {
    console.log("1. Escribe un programa que verifique si un número es positivo o negativo.");
    let numSigno = prompt("1. Signo de un número.\nIngresa un número para verificar si es positivo o negativo:");
    let signo = "";
    if (numSigno < 0)
        signo = "negativo";
    else
        signo = "positivo";
    console.log(`El número ${numSigno} es ${signo}.`);
    alert(`El número ${numSigno} es ${signo}.`);
}

function ejercicio2() {
    console.log("2. Usa switch para imprimir el día de la semana según un número del 1 al 7.");
    let nombreDia, dia;
    do {
        dia = prompt("2. Día de la semana con switch.\nIngresa un número del 1 al 7 para ver el día correspondiente:");
        switch (dia) {
            case "1":
                nombreDia = "Lunes";
                break;
            case "2":
                nombreDia = "Martes";
                break;
            case "3":
                nombreDia = "Miércoles";
                break;
            case "4":
                nombreDia = "Jueves";
                break;
            case "5":
                nombreDia = "Viernes";
                break;
            case "6":
                nombreDia = "Sábado";
                break;
            case "7":
                nombreDia = "Domingo";
                break;
            default:
                alert("Número inválido. Por favor ingresa un número del 1 al 7.");
                nombreDia = null;
        }
    } while (!nombreDia);
    console.log(`Día indicado: ${nombreDia}`);
    alert(`Día indicado: ${nombreDia}`);
}

function ejercicio3() {
    console.log("3. Haz un bucle for que imprima los números del 1 al 10.");
    for (let i = 1; i <= 10; i++)
        console.log(i);
    alert("3. Bucle for del 1 al 10.\nSe indican en la consola los números del 1 al 10.");
}

function ejercicio4() {
    console.log("4. Crea un programa que calcule el factorial de un número usando while.");

    let numFactorial = prompt("4. Factorial con while.\nIngresa un número para calcular su factorial:");
    let factorial = 1, contador = 1;
    while (contador <= numFactorial) {
        factorial *= contador;
        contador++;
    }
    console.log(`El factorial de ${numFactorial} es ${factorial}`);
    alert(`El factorial de ${numFactorial} es ${factorial}`);
}

function ejercicio5() {
        console.log("5. Escribe un condicional que determine si una persona puede votar según su edad.");

        let edad = prompt("5. Votación por edad.\nIngresa tu edad para saber si puedes votar:");
        let puedeVotar = "";
        if (edad < 18)
            puedeVotar = "no ";
        console.log(`Con ${edad} años, ${puedeVotar}puedes votar.`);
        alert(`Con ${edad} años, ${puedeVotar}puedes votar.`);
}

function ejercicio6() {
    console.log("6. Imprime los números pares entre 1 y 20 con un bucle for.");
    console.log("Números pares del 1 al 20:");
    for (let i = 1; i <= 20; i++) {
        if (i % 2 == 0)
            console.log(i);
    }
    alert("6. Números pares del 1 al 20.\nSe indican en la consola los números pares entre 1 y 20.");
}

function ejercicio7() {
    console.log("7. Usa switch para imprimir un mensaje dependiendo de la calificación (A, B, C, D, F).");
    let calificacion = prompt("7. Calificación con switch.\nIngresa una calificación (A, B, C, D, F):").toUpperCase();
    let mensaje;
    switch (calificacion) {
        case "A":
            mensaje = "Excelente";
            break;
        case "B":
            mensaje = "Muy bien";
            break;
        case "C":
            mensaje = "Bien";
            break;
        case "D":
            mensaje = "Regular";
            break;
        case "F":
            mensaje = "Desaprobado";
            break;
        default:
            mensaje = "Calificación incorrecta";
    }
    console.log(`Calificación: ${calificacion}, mensaje: ${mensaje}`);
    alert(`Calificación: ${calificacion}, Mensaje: ${mensaje}`);
}

function ejercicio8() {
    console.log("8. Haz un programa que pida dos números y los sume si ambos son positivos.");
    let numero1 = prompt("8. Suma de dos números positivos.\nIngresa el primer número:");
    let numero2 = prompt("Ingresa el segundo número:");
    if (numero1 > 0 && numero2 > 0) {
        let sumaPositivos = Number(numero1) + Number(numero2);
        console.log(`La suma de ${numero1} y ${numero2} es ${sumaPositivos}`);
            alert(`La suma de ${numero1} y ${numero2} es ${sumaPositivos}`);
    } else {
        alert("Ambos números deben ser positivos para realizar la suma.");
    }
}

function ejercicio9() {
    console.log("9. Escribe un bucle while que cuente de 10 a 1 en orden descendente.");
    let cuenta = 10;
    while (cuenta >= 1) {
        console.log(cuenta);
        cuenta--;
    }
    alert("9. Bucle while descendente del 10 al 1.\nSe indican en la consola los números del 10 al 1.");
}

function ejercicio10() {
    console.log("10. Crea una calculadora básica que permita sumar o restar según el operador ingresado.");
    let numA = prompt("10. Calculadora básica.\nIngresa el primer número:");
    let numB = prompt("Ingresa el segundo número:");
    let operador;
    let resultado;
    do {
        operador = prompt("Ingresa el operador (+ o -):");
        if (operador === "+") {
            resultado = Number(numA) + Number(numB);
            console.log(`Resultado: ${numA} + ${numB} = ${resultado}`);
                    alert(`Resultado: ${numA} + ${numB} = ${resultado}`);
        } else if (operador === "-") {
            resultado = Number(numA) - Number(numB);
            console.log(`Resultado: ${numA} - ${numB} = ${resultado}`);
                    alert(`Resultado: ${numA} - ${numB} = ${resultado}`);
        } else {
            alert("Operador inválido. Solo se permiten + o -.");
        }
    } while (operador !== "+" && operador !== "-");
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