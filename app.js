// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let Amigos =[]; // Array para almacenar los nombres de los amigos

// Función para agregar un amigo al array

function agregarAmigo() {
    nombre = document.getElementById("amigo").value; // Obtiene el nombre del amigo desde un campo de entrada
    if (nombre == "") {
        alert("Por favor, ingresa un nombre válido."); // Muestra un mensaje de error si el campo está vacío
    } else {
        actualizarAmigos(); // Llama a la función para actualizar el array de amigos
        console.log(Amigos); // Muestra el array actualizado en la consola
        document.querySelector("#amigo").value = ""; // Limpia el campo de entrada del amigo
        asignarTextoElemento("#listaAmigos",`${nombre} agregado correctamente.`);
    }
}


function actualizarAmigos(){
    Amigos.push(nombre); // Agrega el nombre del amigo al array
}


function sortearAmigo(){
    if (Amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * Amigos.length); // Genera un índice aleatorio basado en la longitud del array
    let amigoSorteado = Amigos[indiceAleatorio]; // Selecciona un amigo al azar
    asignarTextoElemento("#resultado", "El amigo sorteado es: " + amigoSorteado); // Muestra el nombre del amigo sorteado
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}