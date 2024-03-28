function encriptar() {
    let texto = document.getElementById("ingreseTexto").value;
    let tituloMensaje = document.getElementById("sinMensaje");
    let parrafo = document.getElementById("clausula");
    let dibujo = document.getElementById("dibujo");

    let textoCifrado = texto
        .replace(/e/gi, "esp")
        .replace(/i/gi, "img")
        .replace(/a/gi, "act")
        .replace(/o/gi, "ocar")
        .replace(/u/gi, "unim");
        
    if (texto.trim() !== '') {
        document.getElementById("ingreseTexto").value = textoCifrado;
        tituloMensaje.textContent = "Text encrypted successfully";
        parrafo.textContent = "";
        dibujo.src = "./images/Encriptado.png";
    } else {
        dibujo.src = "./images/Muñeco.png";
        tituloMensaje.textContent = "No message were found";
        parrafo.textContent = "Enter the text you want to encrypt or decrypt.";
        swal("Ooops!", "You must enter some text", "warning");
    }
}

function desencriptar() {
    let texto = document.getElementById("ingreseTexto").value;
    let tituloMensaje = document.getElementById("sinMensaje");
    let parrafo = document.getElementById("clausula");
    let dibujo = document.getElementById("dibujo");

    let textoDesencriptado = texto
        .replace(/esp/gi, "e")
        .replace(/img/gi, "i")
        .replace(/act/gi, "a")
        .replace(/ocar/gi, "o")
        .replace(/unim/gi, "u");

    if (texto.trim() !== '') {
        document.getElementById("ingreseTexto").value = textoDesencriptado;
        tituloMensaje.textContent = "Text decrypted successfully";
        parrafo.textContent = "";
        dibujo.src = "./images/Desencriptado.png";
    } else {
        dibujo.src = "./images/Muñeco.png";
        tituloMensaje.textContent = "No message were found";
        parrafo.textContent = "Enter the text you want to encrypt or decrypt.";
        swal("Ooops!", "You must enter some text", "warning");
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
        swal("Ooops!", "No text to copy", "warning");
    } else {
        swal("Text Copied");
    }
    
}

/*function cambiarColores() {
    // Obtener referencias a los botones y al texto
    var botonesEs = document.querySelectorAll(".es");
    var botonesEn = document.querySelectorAll(".en");

    botonesEs.forEach(function(boton) {
        boton.style.borderRadius = '24px 0 0 24px';
        boton.style.color = '#0A3871';
    });

    botonesEn.forEach(function(boton) {
        boton.style.backgroundColor = '#0A3871';
        boton.style.borderRadius = '0 24px 24px 0';
        boton.style.color = '#FFFFFF';
    });
}*/
