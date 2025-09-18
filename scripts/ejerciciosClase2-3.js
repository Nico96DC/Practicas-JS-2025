function postAccion() {
    console.log("\n");
    let volver = confirm("¿Deseas volver al menú anterior?");
    if (!volver) return false; // Termina el programa
    return true; // Vuelve al menú
}

let eleccion, limpiado, respuesta
while (true) {
    eleccion = prompt("Funciones.\nSelecciona una opción:\n1. Área de un triángulo\n2. Número par o impar\n3. Multiplicación con función de flecha\n4. Convertir a mayúsculas\n5. Mayor de dos números\n6. Invertir una cadena\n7. Celsius a Fahrenheit\n8. Verificar palíndromo\n9. Suma de un arreglo\n10. Calculadora básica\n\nPresiona otro número para salir.");
    switch (eleccion) {
        case "1":
            console.log("1. Declara una función que calcule el área de un triángulo.");

            let base = prompt("1. Área de un triángulo.\nIngresa la base del triángulo:");
            let altura = prompt("Ingresa la altura del triángulo:");
            function areaTriangulo(b, h) {
                return (b * h) / 2;
            }
            let area = areaTriangulo(Number(base), Number(altura));
            console.log(`Área del triángulo con base ${base} y altura ${altura} es ${area}`);
            alert(`Área del triángulo con base ${base} y altura ${altura} es ${area}`);

            if (!postAccion()) break;
            continue;
        case "2":
            console.log("2. Crea una función anónima que determine si un número es par o impar.");

            let numero = prompt("2. Número par o impar.\nIngresa un número para verificar si es par o impar:");
            const esPar = function (n) {
                return n % 2 === 0;
            };
            let parImpar = esPar(Number(numero)) ? "par" : "impar";
            console.log(`${numero} es un número ${parImpar}.`);
            alert(`${numero} es un número ${parImpar}.`);

            if (!postAccion()) break;
            continue;
        case "3":
            console.log("3. Usa una función de flecha para multiplicar dos números.");

            let factor1 = prompt("3. Multiplicación con función de flecha.\nIngresa el primer número:");
            let factor2 = prompt("Ingresa el segundo número:");
            const multiplicar = (a, b) => a * b;
            let producto = multiplicar(Number(factor1), Number(factor2));
            console.log(`${factor1} * ${factor2} = ${producto}`);
            alert(`${factor1} * ${factor2} = ${producto}`);

            if (!postAccion()) break;
            continue;
        case "4":
            console.log("4. Escribe una función que convierta una palabra a mayúsculas.");
            
            let palabra = prompt("4. Convertir a mayúsculas.\nIngresa una palabra para convertir a mayúsculas:");
            function aMayusculas(p) {
                return p.toUpperCase();
            }
            let palabraMayus = aMayusculas(palabra);
            console.log(`Palabra original: ${palabra}, en mayúsculas: ${palabraMayus}`);
            alert(`Palabra original: ${palabra}, en mayúsculas: ${palabraMayus}`);

            if (!postAccion()) break;
            continue;
        case "5":
            console.log("5. Haz una función que reciba dos números y retorne el mayor de ellos.");

            let n1 = prompt("5. Mayor de dos números.\nIngresa el primer número:");
            let n2 = prompt("Ingresa el segundo número:");
            function mayor(a, b) {
                return a > b ? a : b;
            }
            let numMayor = mayor(Number(n1), Number(n2));
            console.log(`Entre ${n1} y ${n2}, el mayor es ${numMayor}.`);
            alert(`Entre ${n1} y ${n2}, el mayor es ${numMayor}.`);

            if (!postAccion()) break;
            continue;
        case "6":
            console.log("6. Crea una función que invierta una cadena.");
            
            let cadena = prompt("6. Invertir una cadena.\nIngresa una cadena para invertir:");
            function invertirCadena(c) {
                return c.split('').reverse().join('');
            }
            let cadenaInvertida = invertirCadena(cadena);
            console.log(`Cadena original: ${cadena}, invertida: ${cadenaInvertida}`);
            alert(`Cadena original: ${cadena}, invertida: ${cadenaInvertida}`);

            if (!postAccion()) break;
            continue;
        case "7":
            console.log("7. Declara una función que convierta grados Celsius a Fahrenheit.");

            let celsius = prompt("7. Celsius a Fahrenheit.\nIngresa la temperatura en grados Celsius:");
            function celsiusAFahrenheit(c) {
                return (c * 9/5) + 32;
            }
            let fahrenheit = celsiusAFahrenheit(Number(celsius));
            console.log(`${celsius}°C son ${fahrenheit}°F.`);
            alert(`${celsius}°C son ${fahrenheit}°F.`);

            if (!postAccion()) break;
            continue;
        case "8":
            console.log("8. Escribe una función que verifique si una palabra es un palíndromo.");
            
            let palabraPalindromo = prompt("8. Verificar palíndromo.\nIngresa una palabra para verificar si es un palíndromo:");
            function esPalindromo(p) {
                let pLimpia = p.toLowerCase().replace(/[\W_]/g, '');
                return pLimpia === pLimpia.split('').reverse().join('');
            }
            let resultadoPalindromo = esPalindromo(palabraPalindromo) ? "es" : "no es";
            console.log(`${palabraPalindromo} ${resultadoPalindromo} un palíndromo.`);
            alert(`${palabraPalindromo} ${resultadoPalindromo} un palíndromo.`);

            if (!postAccion()) break;
            continue;
        case "9":
            console.log("9. Haz una función que calcule la suma de los números de un arreglo.");
            
            let arregloInput = prompt("9. Suma de un arreglo.\nIngresa varios números separados por comas:");
            let arregloNumeros = arregloInput.split(',').map(Number);
            function sumaArreglo(arr) {
                return arr.reduce((acc, val) => acc + val, 0);
            }
            let sumaTotal = sumaArreglo(arregloNumeros);
            console.log(`La suma de [${arregloNumeros}] es ${sumaTotal}.`);
            alert(`La suma de [${arregloNumeros}] es ${sumaTotal}.`);
            if (!postAccion()) break;
            continue;
        case "10":
            console.log("10. Usa funciones para simular una calculadora básica.");

            let numA = prompt("10. Calculadora básica.\nIngresa el primer número:");
            let numB = prompt("Ingresa el segundo número:");
            let operador = prompt("Ingresa el operador (+ o -):");
            function calcular(num1, num2, op) {
                if (op === "+") return num1 + num2;
                else if (op === "-") return num1 - num2;
                else return null;
            }
            let resultado = calcular(Number(numA), Number(numB), operador);
            if (resultado !== null) {
                console.log(`Resultado: ${numA} ${operador} ${numB} = ${resultado}`);
                    alert(`Resultado: ${numA} ${operador} ${numB} = ${resultado}`);
            } else {
                console.log("Operador inválido. Usa + o -.");
                    alert("Operador inválido. Usa + o -.");
            }

            if (!postAccion()) break;
            continue;
        default:
            break;
    }
    break;
}