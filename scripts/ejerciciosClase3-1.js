let ej4Completado = false;

function ejercicio1() {
    console.log("1. Selecciona un elemento por su ID y cambia su texto.");

    // Selecciona el elemento por la ID
    const elemento = document.getElementById('textoEj1');
    if (!elemento) {
        alert(`No existe ningún elemento con ID textoEj1`);
        console.log(`No existe ningún elemento con ID textoEj1`);
        return;
    }
    
    // Se consigue el texto original
    let textoOriginal = elemento.innerText;
    console.log(`El texto original del elemento con ID textoEj1 es "${textoOriginal}"`);
    
    // Se cambia el texto
    let textoNuevo = prompt(`Ingrese el nuevo texto para el elemento`);     
    elemento.innerText = textoNuevo;
    alert(`El texto del elemento con ID 'ej1' ha sido cambiado de ${textoOriginal} a ${textoNuevo}.`);
    console.log(`El texto del elemento con ID 'ej1' ha sido cambiado de ${textoOriginal} a ${textoNuevo}.`);
}

function ejercicio2() { // Seguir esto luego
    console.log("2. Cambia el color de fondo de un elemento al hacer clic en él.");


    document.getElementById('ej2').addEventListener('click', function() {
        this.style.backgroundColor = this.style.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
        alert("El color de fondo del elemento con ID 'ej2' ha sido cambiado.");
        console.log("El color de fondo del elemento con ID 'ej2' ha sido cambiado.");
    });
}

/*
function ejercicio3() {
    console.log("3. Selecciona todos los elementos con una clase específica y cámbiales el texto.");
    document.querySelectorAll('.ej3').forEach((element, index) => {
        element.innerText = `Texto cambiado ${index + 1}`;
        alert(`El texto de los elementos con clase 'ej3' han sido cambiados.`);
        console.log(`El texto de los elementos con clase 'ej3' han sido cambiados.`);
    });
}

function ejercicio4() {
    console.log("4. Agrega una nueva clase a un elemento seleccionado.");
    let elemento = document.getElementById('ej4');
    elemento.classList.add('nueva-clase');
    ej4Completado = true;
    alert("Se ha agregado una nueva clase al elemento con ID 'ej4'.");
    console.log("Se ha agregado una nueva clase al elemento con ID 'ej4'.");
}

function ejercicio5() {
    console.log("5. Elimina una clase existente de un elemento.");
    let elemento = document.getElementById('ej4');
    if (!ej4Completado) {
        alert("La clase anterior no ha sido creada.");
        console.log("La clase anterior no ha sido creada.");
    } else {
        elemento.classList.remove('nueva-clase');
        alert("Se ha eliminado la clase anteriormente creada.");
        console.log("Se ha eliminado la clase anteriormente creada.");
    }
}

function ejercicio6() {
    console.log("6. Cambia el contenido HTML de un div usando innerHTML.");
    let div = document.getElementById('ej6');
    div.innerHTML = "<strong>Nuevo contenido HTML</strong>";
    alert("El contenido HTML del div con ID 'ej6' ha sido cambiado.");
    console.log("El contenido HTML del div con ID 'ej6' ha sido cambiado.");
}

function ejercicio7() {
    console.log("7. Muestra en la consola el texto de un párrafo seleccionado.");
    let textoParrafo = document.getElementById('ej7').innerText;
    console.log(`El texto del párrafo con ID 'ej7' es: ${textoParrafo}`);
    alert(`El texto del párrafo con ID 'ej7' es: ${textoParrafo}`);
}

function ejercicio8() {
    console.log("8. Usa querySelectorAll para seleccionar múltiples elementos y recorrerlos con un bucle.");
    document.querySelectorAll('.ej8').forEach((element, index) => {
        console.log(`Elemento ${index + 1}: ${element.innerText}`);
    });
    alert("Se han listado en la consola los textos de los elementos con clase 'ej8'.");
    console.log("Se han listado en la consola los textos de los elementos con clase 'ej8'.");
}

function ejercicio9() {
    console.log("9. Crea un botón que, al hacer clic, oculte un párrafo.");
    document.getElementById('btnEj9').addEventListener('click', function() {
        let parrafo = document.getElementById('ej9');
        parrafo.style.display = parrafo.style.display === 'none' ? 'block' : 'none';
        alert("El párrafo con ID 'ej9' ha sido ocultado/mostrado.");
        console.log("El párrafo con ID 'ej9' ha sido ocultado/mostrado.");
    });
}

function ejercicio10() {
    console.log("10. Agrega un nuevo elemento HTML a un contenedor existente.");
    let contenedor = document.getElementById('ej10');
    let nuevoElemento = document.createElement('p');
    nuevoElemento.innerText = "Este es un nuevo párrafo agregado.";
    contenedor.appendChild(nuevoElemento);
    alert("Se ha agregado un nuevo párrafo al contenedor con ID 'ej10'.");
    console.log("Se ha agregado un nuevo párrafo al contenedor con ID 'ej10'.");
}
*/
window.ejercicio1 = ejercicio1;
/*
window.ejercicio2 = ejercicio2;
window.ejercicio3 = ejercicio3;
window.ejercicio4 = ejercicio4;
window.ejercicio5 = ejercicio5;
window.ejercicio6 = ejercicio6;
window.ejercicio7 = ejercicio7;
window.ejercicio8 = ejercicio8;
window.ejercicio9 = ejercicio9;
window.ejercicio10 = ejercicio10;
*/