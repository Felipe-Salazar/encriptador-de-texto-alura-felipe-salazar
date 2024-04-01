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
        dibujo.src = "Images/Encriptado.png";
    } else {
        dibujo.src = "Images/Muñeco.png";
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
        dibujo.src = "Images/Desencriptado.png";
    } else {
        dibujo.src = "Images/Muñeco.png";
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


//Cambiar idioma

/*function cambiarIdioma(idioma) {
    var placeholder = "";
    var textoCopiar = "";
    var textoAdvertencia = "";
    var textoEncriptar = "";
    var textoDesencriptar = "";
    var textoClausula = "";
    var textoMensaje = "";

    var textoDesarrollado = "";

    if (idioma === "es") {
        placeholder = "Ingrese el texto aquí";
        textoCopiar = "Copiar";
        textoAdvertencia = "Solo letras minúsculas y sin acentos";
        textoEncriptar = "Encriptar";
        textoDesencriptar = "Desencriptar";
        textoMensaje = "Ningún mensaje fue encontrado";
        textoClausula = "Ingresa el texto que desees encriptar o desencriptar.";
        textoDesarrollado = "Desarrollado por Felix";
    } else if (idioma === "en") {
        placeholder = "Enter text here";
        textoCopiar = "Copy";
        textoAdvertencia = "Lowercase letters and no accents";
        textoEncriptar = "Encrypt";
        textoDesencriptar = "Decrypt";
        textoMensaje = "No message were found";
        textoClausula = "Enter the text you want to encrypt or decrypt.";
        textoDesarrollado = "Developed by Felipe Salazar";
    }

    document.querySelector(".ingreseTexto").placeholder = placeholder;
    document.querySelector(".copiar").textContent = textoCopiar;
    document.querySelector(".advertencia").textContent = textoAdvertencia;
    document.querySelector(".encriptar").textContent = textoEncriptar;
    document.querySelector(".desencriptar").textContent = textoDesencriptar;
    document.querySelector(".sinMensaje").textContent = textoMensaje;
    document.querySelector(".clausula").textContent = textoClausula;
    document.querySelector(".desarrollado").textContent = textoDesarrollado;
}

function cambiarColores(botonPresionado) {
    // Obtener referencias a los botones y al texto
    var botonesEs = document.querySelectorAll(".es");
    var botonesEn = document.querySelectorAll(".en");

    // Desactivar todos los botones
    botonesEs.forEach(function(boton) {
        boton.style.backgroundColor = '#D8DFE8';
        boton.disabled = false;
    });
    botonesEn.forEach(function(boton) {
        boton.style.backgroundColor = '#D8DFE8';
        boton.disabled = false;
    });

    // Activar el botón presionado y ajustar estilos
    if (botonPresionado === 'es') {
        botonesEs.forEach(function(boton) {
            boton.style.backgroundColor = '#0A3871';
            boton.style.borderRadius = '24px 0 0 24px';
            boton.style.color = '#FFFFFF';
            boton.disabled = true;
        });
        botonesEn.forEach(function(boton) {
            boton.style.borderRadius = '0 24px 24px 0';
            boton.style.color = '#0A3871';
        });
        // Cambiar al idioma español
        cambiarIdioma("es");
    } else if (botonPresionado === 'en') {
        botonesEs.forEach(function(boton) {
            boton.style.borderRadius = '24px 0 0 24px';
            boton.style.color = '#0A3871';
        });
        botonesEn.forEach(function(boton) {
            boton.style.backgroundColor = '#0A3871';
            boton.style.borderRadius = '0 24px 24px 0';
            boton.style.color = '#FFFFFF';
            boton.disabled = true;
        });
        // Cambiar al idioma inglés
        cambiarIdioma("en");
    }
}

cambiarIdioma("es");*/
