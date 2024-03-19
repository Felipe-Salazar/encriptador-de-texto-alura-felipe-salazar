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
        
if(text.value != 0){
    document.getElementById("ingreseTexto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    dibujo.src = "./images/Encriptado.png";
} else {
    dibujo.src = "./images/Muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encotrado";
    parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
    alert("Debes ingresar algún texto");
}
}