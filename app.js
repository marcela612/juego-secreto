// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo () {
    const input = document.getElementById("nombreAmigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre. ");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}

function actualizarLista () {
    const lista = document.getElementById(listaAmigos);
    lista.innerHTML = "";

    for (let amigo of amigos) {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert ("la lista esta vacia, Agregar al menos un nombre. ");
    return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const seleccionado = amigos[indice];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: <strong> ${seleccionado}</strong>`;
}

