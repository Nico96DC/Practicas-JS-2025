// ======================
// Variables de control
// ======================
let retoActual = 0;

function iniciarLaboratorio() {
    retoActual = 1;
    console.log("👩‍💻 Bienvenido al Laboratorio Interactivo de JavaScript");
    console.log("👉 Reto 1: Llama a la función saludar() para comenzar.");
}

// ======================
// CLASE 1
// ======================
function saludar() {
    if (retoActual === 1) {
    console.log("👋 ¡Hola! Bien hecho.");
    retoActual = 2;
    console.log("👉 Reto 2: Prueba sumar(4, 6).");
    } else {
    console.log("⚠️ Aún no desbloqueaste este reto.");
    }
}

function sumar(a, b) {
    if (retoActual === 2) {
    console.log(`📌 Resultado: ${a} + ${b} = ${a + b}`);
    retoActual = 3;
    console.log("👉 Reto 3: Ejecuta operaciones(10, 5).");
    } else {
    console.log("⚠️ No puedes hacer este reto aún.");
    }
}

function operaciones(a, b) {
    if (retoActual === 3) {
    console.log("🔢 Operaciones básicas:");
    console.log(`${a} + ${b} =`, a + b);
    console.log(`${a} - ${b} =`, a - b);
    console.log(`${a} * ${b} =`, a * b);
    console.log(`${a} / ${b} =`, a / b);
    retoActual = 4;
    console.log("👉 Reto 4: Ejecuta verificarEdad(15).");
    } else {
    console.log("⚠️ Aún no llegaste aquí.");
    }
}

// ======================
// CLASE 2
// ======================
function verificarEdad(edad) {
    if (retoActual === 4) {
    if (edad >= 18) {
        console.log(`🎉 Con ${edad} años eres mayor de edad.`);
    } else {
        console.log(`😅 Con ${edad} años todavía eres menor.`);
    }
    retoActual = 5;
    console.log("👉 Reto 5: Llama a imprimirNumeros().");
    } else {
    console.log("⚠️ Aún no llegaste aquí.");
    }
}

function imprimirNumeros() {
    if (retoActual === 5) {
    console.log("📈 Números del 1 al 10:");
    for (let i = 1; i <= 10; i++) console.log(i);
    retoActual = 6;
    console.log("👉 Reto 6: Adivina el número secreto con adivinar(7).");
    } else {
    console.log("⚠️ Todavía no desbloqueaste este reto.");
    }
}

function adivinar(numero) {
    if (retoActual === 6) {
    let secreto = 7;
    if (numero === secreto) {
        console.log("🎯 ¡Correcto! Adivinaste el número secreto.");
        retoActual = 7;
        console.log("👉 Reto 7: Llama a mostrarProductos().");
    } else {
        console.log("❌ No es correcto, intenta otra vez.");
    }
    } else {
    console.log("⚠️ Todavía no desbloqueaste este reto.");
    }
}

// ======================
// CLASE 3
// ======================
let productos = [
    { nombre: "🍎 Manzana", precio: 100 },
    { nombre: "🍌 Banana", precio: 80 },
    { nombre: "🍊 Naranja", precio: 120 }
];

function mostrarProductos() {
    if (retoActual === 7) {
    console.log("🛒 Lista de productos:");
    productos.forEach((p, i) => {
        console.log(`${i + 1}. ${p.nombre} - $${p.precio}`);
    });
    retoActual = 8;
    console.log("👉 Reto 8: Calcula el total con calcularTotal().");
    } else {
    console.log("⚠️ Todavía no llegaste aquí.");
    }
}

function calcularTotal() {
    if (retoActual === 8) {
    let total = productos.reduce((suma, p) => suma + p.precio, 0);
    console.log(`💰 Total: $${total}`);
    retoActual = 9;
    mostrarCertificado();
    } else {
    console.log("⚠️ Todavía no desbloqueaste este reto.");
    }
}

// ======================
// CERTIFICADO FINAL 🎖️
// ======================
function mostrarCertificado() {
    console.log("🎉 ¡Felicidades! Has completado todos los retos de JavaScript.");
    console.log("📜 ¡Certificado de completado desbloqueado!");
    console.log("👏 Excelente trabajo, futuro programador/a.");
}
