// ============================
// CLASE 1: Variables y Operadores
// ============================
function saludar() {
    console.log("Guten morgen!");
}

function sumar(a, b) {
    console.log(`📌 Resultado de ${a} + ${b} = ${a + b}`);
}

function operaciones(a, b) {
    console.log("🔢 Operaciones básicas:");
    console.log(`${a} + ${b} =`, a + b);
    console.log(`${a} - ${b} =`, a - b);
    console.log(`${a} * ${b} =`, a * b);
    console.log(`${a} / ${b} =`, a / b);
}

// ============================
// CLASE 2: Condicionales, Bucles y Funciones
// ============================
function verificarEdad(edad) {
    let neg = ""
    if (edad <= 18) {
        neg = "no "
    }
    console.log(`Con ${edad} años, ${neg}eres mayor de edad.`);
}

function imprimirNumeros() {
    console.log("Se imprimen los números del 1 al 10:");
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

function adivinar(numero) {
    let secreto = 7; // número fijo para el reto
    if (numero === secreto) {
        console.log("¡Adivinaste el número secreto!");
    } else {
        console.log("No es correcto, intenta otra vez.");
    }
}

// ============================
// CLASE 3: Arreglos y Objetos
// ============================
let productos = [
    { nombre: "Manzana", precio: 100 },
    { nombre: "Banana", precio: 80 },
    { nombre: "Naranja", precio: 120 }
];

function mostrarProductos() {
    console.log("Lista de productos disponibles:");
    productos.forEach((p, i) => {
    console.log(`${i + 1}. ${p.nombre}, a $${p.precio}`);
    });
}

function calcularTotal() {
    let total = productos.reduce((suma, p) => suma + p.precio, 0);
    console.log(`Precio total de todos los productos: $${total}`);
}

// ============================
// MENSAJE INICIAL
// ============================
console.log("Laboratorio JS cargado.");
console.log("Función saludo:");
saludar();
console.log("Función suma: Ingresados 4 y 6");
sumar(4, 6);
console.log("Operaciones matemáticas: Ingresados 10 y 5");
operaciones(10, 5);
console.log("Verificación de edad: Número 20");
verificarEdad(20);
console.log("Imprimir números del 1 al 10:");
imprimirNumeros();
console.log("Adivinanza de número: Intentando con 7");
adivinar(7);
console.log("Muestra de productos:");
mostrarProductos();
console.log("Cálculo total de productos:");
calcularTotal();
