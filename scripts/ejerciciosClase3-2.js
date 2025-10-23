function ejercicio1() {
    console.log("1. Crea un botón que muestre un mensaje en consola al hacer clic.");
    document.getElementById('ej1');
    console.log("Botón clickeado.");
    alert("Botón clickeado.");
}

function ejercicio2() {
    console.log("2. Haz que un campo de texto cambie su color de fondo al escribir en él.");
    const texto = document.getElementById('textoEj2');
    texto.disabled = false;
    texto.addEventListener('input', function () {
        this.style.backgroundColor = 'lightgreen';
    }); 
}

let contadorEj3 = 0;
function ejercicio3() {
    console.log("3. Implementa un contador que aumente cada vez que se haga clic en un botón.");
    const textoCont = document.getElementById('conteoEj3');
    let reinicioBtn = document.getElementById('reinicioEj3');
    reinicioBtn.style.display = '';
    if (reinicioBtn) {
        reinicioBtn.addEventListener('click', function() {
            contadorEj3 = 0;
        });
    }
    textoCont.innerText = `Contador: ${contadorEj3}`;
    if (!textoCont)
        return console.warn("Contador no encontrado.");
    contadorEj3++;
    textoCont.textContent = `Contador: ${contadorEj3}`;
}

function ejercicio4() {
    console.log("4. Muestra un mensaje de error si un campo de texto está vacío al enviar un formulario.");
}

function ejercicio5() {
    console.log("5. Cambia la posición de un elemento cuando se pase el ratón sobre él.");
}

function ejercicio6() {
    console.log("6. Detecta y muestra en la consola la tecla presionada por el usuario.");
}

function ejercicio7() {
    console.log("7. Implementa un botón que oculte o muestre un elemento al hacer clic (toggle).");
}

function ejercicio8() {
    console.log("8. Crea un campo de selección (dropdown) que actualice un párrafo con la opción seleccionada.");
}

function ejercicio9() {
    console.log("9. Implementa un formulario con validación para correos electrónicos.");
}

function ejercicio10() {
    console.log("10. Haz un evento que cambie el texto de un botón al hacer clic en él.");
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
