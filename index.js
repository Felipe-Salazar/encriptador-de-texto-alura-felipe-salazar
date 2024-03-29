function encriptar() {
    let texto = document.getElementById("ingreseTexto").value;
    let tituloMensaje = document.getElementById("sinMensaje");
    let parrafo = document.getElementById("clausula");
    let dibujo = document.getElementById("dibujo");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
        
    if (texto.trim() !== '') {
        document.getElementById("ingreseTexto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        dibujo.src = "./images/Encriptado.png";
    } else {
        dibujo.src = "./images/Muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
        swal("Ooops!", "Debes ingresar algún texto", "warning");
    }
}

function desencriptar() {
    let texto = document.getElementById("ingreseTexto").value;
    let tituloMensaje = document.getElementById("sinMensaje");
    let parrafo = document.getElementById("clausula");
    let dibujo = document.getElementById("dibujo");

    let textoDesencriptado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.trim() !== '') {
        document.getElementById("ingreseTexto").value = textoDesencriptado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        dibujo.src = "./images/Desencriptado.png";
    } else {
        dibujo.src = "./images/Muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
        swal("Ooops!", "Debes ingresar algún texto", "warning");
    }
}

function copiar() {
    // Selecciona el contenido del input
    let input = document.getElementById("ingreseTexto");
    input.select();
    input.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el texto seleccionado al portapapeles
    document.execCommand("copy");

    // Deselecciona el texto
    input.setSelectionRange(0, 0);

    if (input.value.trim() === '') {
        swal("Ooops!", "No hay texto que copiar", "warning");
    } else {
        swal("Texto Copiado");
    }
    
}

/*function verificarTexto() {
    let input = document.getElementById("ingreseTexto");

    if (input.value.trim() === '') {
        document.querySelector('#copiar').setAttribute('disabled', 'true');
    } else {
        document.getElementById('#copiar').removeAttribute('disabled');
    }
}

function copiar() {
    let input = document.getElementById("ingreseTexto");
    input.select();
    input.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand("copy");
    input.setSelectionRange(0, 0);
    alert("¡Texto copiado!");
}*/
