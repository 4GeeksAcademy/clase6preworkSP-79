// Verificador de edad
function verificarEdad() {
  const edad = document.getElementById("edad").value;
  const mensaje = document.getElementById("mensaje");

  if (edad < 18) {
    mensaje.textContent = "No puedes entrar a la discoteca";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "Puedes entrar a la discoteca";
    mensaje.style.color = "green";
  }
}

// Contador de clicks
let contador = 0;
document.getElementById("incrementar").addEventListener("click", function() {
  contador++;
  document.getElementById("contador").textContent = contador;
});

//Cambiar el color de fondo
const cambiarColor = () => {
  let color = document.getElementById("color").value;
  document.body.style.backgroundColor = color;
};

// Mostrar y ocultar párrafo
window.onload = function() {
  document.getElementById("toggleParrafo").addEventListener("click", () => {
    let parrafo = document.getElementById("parrafo");
    if (parrafo.style.display === "none") {
      parrafo.style.display = "block";
    } else {
      parrafo.style.display = "none";
    }
  });
};

// Validación de formulario
document.getElementById("enviar").addEventListener("click", function() {
  let nombre = document.getElementById("nombre").value;
  let mensaje = document.getElementById("mensaje2");
  if (nombre === "") {
    mensaje.textContent = "Por favor, escribe tu nombre";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "Nombre enviado correctamente";
    mensaje.style.color = "green";
  }
});

//Aumentar y disminuir el tamaño de un texto
let tamanoTexto = 16;
document.getElementById("aumentar").addEventListener("click", function() {
  tamanoTexto += 2;
  document.getElementById("texto2").style.fontSize = tamanoTexto + "px";
});
document.getElementById("disminuir").addEventListener("click", function() {
  tamanoTexto -= 2;
  document.getElementById("texto2").style.fontSize = tamanoTexto + "px";
});
